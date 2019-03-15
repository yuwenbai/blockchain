pragma solidity ^0.4.24;
// We have to specify what version of compiler this code will compile with

contract Lottery {
  /* mapping field below is equivalent to an associative array or hash.
  The key of the mapping is candidate name stored as type bytes32 and value is
  an unsigned integer to store the vote count
  */

    struct FunderPerson {
        uint flag; //for sort
        uint number;
        uint mount;
        address addr;
    }

    //当前投注信息汇总
    mapping(uint256  => FunderPerson) public FunderReceived;
    uint public funderReceivedAccount;

    //合约拥有者
    address owner;
    //合约收益地址
    address profitAddress;

    uint8 constant drawLotteryNum = 6;
    uint8 constant lotteryInterval = 100;

    uint public basePeriodNumber; //当前期数
    uint public totalBalanceof; //总余额
    uint public uiTotalBalanceof; //总余额 已经扣除抽水
    uint public perBetCost = 100000000000000000;  //0.1eth
    uint public openLotteryReward = 100000000000000000;  //0.1eth //开奖奖励 同样0.1eth 可调

    //for test
    // uint public aviableBalance ;
    uint public totalWinner = 0;
    uint uilotteryNumber; // 无用
    mapping(address  => uint) public testUI; //

    //记录所有期数
    uint[] public Periods;
    //投注记录
    //地址=》 所有投注历史
    struct StrFundersHistoryBet{
        mapping(address=>uint[]) fundersHistoryBet;
    }
    //期数=》 所有人地址
    mapping(uint => StrFundersHistoryBet) FundersHistoryAddr;

    //开奖记录
    struct LotteryResultHistory {
        uint  bonus;  //当期奖金
        uint  number; //开奖结果
        uint  persons; //中奖人数
    }
    //期数=》 单期记录
    mapping(uint => LotteryResultHistory) LotterysHistory;


    event Increment(uint peroidNum);

  
  /* Solidity doesn't let you pass in an array of strings in the constructor (yet).
  We will use an array of bytes32 instead to store the list of candidates
  */
  
    constructor() public{

        basePeriodNumber = block.number;
        Periods.push(basePeriodNumber);
        owner = msg.sender;
        //暂时使用同一地址
        profitAddress = owner;
    }

    //投注
    function voteLottery(uint[] memory numbers) public payable {

        require(block.number > basePeriodNumber && block.number < basePeriodNumber + lotteryInterval); //投注区间
        //计算开销 金额不够则返回
        uint totalCost = perBetCost * numbers.length;
        require(msg.value >= totalCost);

        for(uint iv = 0; iv < numbers.length; iv++){

            FunderReceived[funderReceivedAccount] = FunderPerson({flag: 100000000, number: numbers[iv], mount: 0, addr: msg.sender});
            funderReceivedAccount = funderReceivedAccount + 1;

            //记录投奖记录
            FundersHistoryAddr[basePeriodNumber].fundersHistoryBet[msg.sender].push(numbers[iv]);
            // uilotteryNumber = FundersHistoryAddr[basePeriodNumber].fundersHistoryBet[msg.sender].length;
        }
        totalBalanceof += msg.value;
        //for ui
        uint profit = totalBalanceof * uint(1) / uint(100);
        uiTotalBalanceof = totalBalanceof - profit;
    }


  // 从缓存以及当前区块组合出最终区块hash
  // value 无用 暂时传入0
    function openLottery(uint useless) public {
        //开奖之后basePeriodNumber随之改变 第二个人也就开不了奖了
        require(block.number > basePeriodNumber + lotteryInterval + drawLotteryNum);

        uint totalCount = 0;
        uint preBlockNumber;
        uint temp = 0;
        for(uint8 i = 1; i <= drawLotteryNum; ++ i){
            preBlockNumber = basePeriodNumber + lotteryInterval + i;
            bytes32 hs = blockhash(preBlockNumber);
            temp = uint(hs) % 6;
            totalCount += temp;
        }
        // totalCount += value;
        uilotteryNumber = useless;
      

        uint marknumber;
        FunderPerson[] memory  myArray = new FunderPerson[](1000);
        myArray[0] = FunderPerson({flag: 100000000, number: 0, mount: 0, addr: msg.sender});
        marknumber++;
        for(uint ii = 0; ii < funderReceivedAccount; ++ii){
            uint tempValue = abs(FunderReceived[ii].number,totalCount);
            if(tempValue < myArray[0].flag){
                delete myArray;
                myArray = new FunderPerson[](1000);
                marknumber = 0; 
                myArray[0] = FunderPerson({flag: tempValue, number: FunderReceived[ii].number, mount: FunderReceived[ii].mount, addr: FunderReceived[ii].addr});
                marknumber++;
          }else if (tempValue == myArray[0].flag){
              myArray[marknumber] = FunderPerson({flag: tempValue, number: FunderReceived[ii].number, mount: FunderReceived[ii].mount, addr: FunderReceived[ii].addr});
              marknumber++;
          }
        }

        //优先结算开奖人奖励
        if (totalBalanceof >= openLotteryReward){
            porterTransfor(msg.sender, openLotteryReward);
        }else{
            porterTransfor(msg.sender, totalBalanceof);
        }

        //fd
        if(funderReceivedAccount > 0){
            //抽水
            uint profit = totalBalanceof * uint(1) / uint(100);
            ownerTransfor(profit);

            totalBalanceof = totalBalanceof - profit;
            uint aviableBalance = totalBalanceof * uint(90) / uint(100);
            totalWinner = marknumber;
            uint avarageAviableBalance = safeDiv(aviableBalance,totalWinner);  //?就改了这一点就不行了？
            for(uint ip = 0; ip < marknumber; ip++ ){
                distributeTransfor(myArray[ip].addr, avarageAviableBalance);
            }
            totalBalanceof = totalBalanceof - aviableBalance;

            //for ui
            uiTotalBalanceof = totalBalanceof - profit;

            // 开奖记录
            LotterysHistory[basePeriodNumber] = LotteryResultHistory({bonus: aviableBalance, number: totalCount, persons: totalWinner});
        }

        //funderReceivedAccount <= 0 
        resetAll();
        
    }

    function distributeTransfor(address  addr, uint amount)  internal{
        addr.transfer(amount);
        testUI[addr] = amount;
    }

    function ownerTransfor(uint amount) internal{
        profitAddress.transfer(amount);
    }

    //给与开奖人奖励
    function porterTransfor(address addr, uint amount) internal{
        addr.transfer(amount);
    }

    function resetAll() internal{
        //重置区块计数
        basePeriodNumber = block.number;

        emit Increment(basePeriodNumber);

        Periods.push(basePeriodNumber);

        //清空投注区数据
        for(uint receive = 0 ; receive<funderReceivedAccount; receive++){
            FunderReceived[receive] = FunderPerson({flag: 100000000, number: 0, mount: 0, addr: address(this)});
        }
        funderReceivedAccount = 0;
    }
  
    function abs(uint lhs, uint rhs) internal pure returns (uint) {
        //shit 参数的时候直接溢出了
        // if(n >= 0) return n;
        // return -n;
        if(lhs >= rhs)
          return lhs - rhs;
        else
          return rhs - lhs;
    }

    function safeDiv(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b > 0);
        uint256 c = a / b;
        assert(a == b * c + a % b);
        return c;
    }

    //返回指定区块mod结果
    function grabBlockNumberAndHash(uint blockNumber) public view returns (uint){
        return uint(blockhash(blockNumber)) % 6;
    }

    //返回当前区块基准
    function grabbaseBlockNumber() public view returns (uint){
        return basePeriodNumber;
    }

    //返回区块开奖基础偏移值
    function grabFirstStageNumber() public pure returns (uint){
        return lotteryInterval;
    }

    //返回所有期
    function grabPeriods()public view returns(uint[] memory){
        return Periods;
    }

    //返回指定期数的投注记录
    function grabFundersHistory(uint period) public view returns(uint[] memory){
        return(FundersHistoryAddr[period].fundersHistoryBet[msg.sender]);
    }

    //返回指定期数的投注记录长度
    function grabFundersHistoryLength(uint period, address addr) public view returns(uint){
        return(FundersHistoryAddr[period].fundersHistoryBet[addr].length);
    }

    //返回指定中奖的记录
    function grabLotteryResultHistory(uint period) public view returns(uint,uint,uint){
        return(LotterysHistory[period].bonus,LotterysHistory[period].number,LotterysHistory[period].persons);
    }


//   event Increment(string who);

// 	function callevent()  payable public {
// 		emit Increment("I am event");
//     }
}