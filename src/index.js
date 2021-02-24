module.exports = function check(str, bracketsConfig) {
  const bracketConfig = bracketsConfig.map((config) => config.join(""));
  function bracketRecursion() {
      if (str.length == 0) return true;
      for (const conf of bracketConfig)
          if (str.includes(conf))
              return bracketRecursion(
                  (str = str.replace(conf, "")),
                  bracketConfig
              );

      return false;
  }
  return bracketRecursion(str, bracketConfig);
};