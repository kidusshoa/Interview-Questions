var theMaximumAchievableX = function (num, t) {
  if (t < 1) {
    return num;
  }

  return num + 2 * t;
};
