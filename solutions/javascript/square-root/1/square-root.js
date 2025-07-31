//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (nb) => {
  if (nb === 0) {
    return 0;
  } else {
    let z = nb / 4;
    let r2 = 2 * squareRoot(z);
    let r3 = r2 + 1;

    return nb < r3 * r3 ? r2 : r3;
  }
};
