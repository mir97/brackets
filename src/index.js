function check(str, bracketsConfig) {

  const bracketConfig = bracketsConfig.map((config) => config.join(""));

  function Recursion(){
    if(str.length==0)
      return true;
    for(const x of bracketConfig)
      if(str.includes(x))
        return Recursion(str = str.replace(x,""), bracketConfig);
    return false;
  }
  return Recursion(str, bracketConfig);
};


