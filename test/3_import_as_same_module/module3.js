export const function1 = () => {
  // Comment the below line and uncomment the one after that
  // for the test to pass.
  return function2();
  //return exports.function2();
};

export const function2 = () => {
  return 'This is real function2';
};
