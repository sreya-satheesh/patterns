import { Star, Hash, Type, Box, Zap } from 'lucide-react';

export type Category = 'Star Patterns' | 'Hollow Patterns' | 'Number Patterns' | 'Alphabet Patterns' | 'Special Patterns';

export interface Pattern {
  id: string;
  title: string;
  category: Category;
  preview: string;
  logic: string;
  javascriptCode: string;
}

export const CATEGORIES: { name: Category; icon: any }[] = [
  { name: 'Star Patterns', icon: Star },
  { name: 'Hollow Patterns', icon: Box },
  { name: 'Number Patterns', icon: Hash },
  { name: 'Alphabet Patterns', icon: Type },
  { name: 'Special Patterns', icon: Zap },
];

export const PATTERNS: Pattern[] = [
  // --- Star Patterns ---
  {
    id: 'solid-square',
    title: 'Solid Square',
    category: 'Star Patterns',
    preview: '*****\n*****\n*****\n*****\n*****',
    logic: `Rows: 1 to n.
In each row, print stars equal to n.
There are no leading spaces.
Every row has the same number of stars.

Key rule: stars = n.`,
    javascriptCode: `function solidSquare(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'rectangle',
    title: 'Rectangle',
    category: 'Star Patterns',
    preview: '*******\n*******\n*******',
    logic: `Rows: 1 to n (height).
In each row, print stars equal to m (width).
There are no leading spaces.
The width is usually greater than the height.

Key rule: stars = m.`,
    javascriptCode: `function rectangle(n, m) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= m; col++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'right-triangle',
    title: 'Right Triangle',
    category: 'Star Patterns',
    preview: '*\n**\n***\n****\n*****',
    logic: `Rows: 1 to n.
In each row, print stars equal to the row number.
There are no leading spaces.
Row 1 prints 1 star, row 2 prints 2 stars, and so on.

Key rule: stars = row number.`,
    javascriptCode: `function rightTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'inverted-right-triangle',
    title: 'Inverted Right Triangle',
    category: 'Star Patterns',
    preview: '*****\n****\n***\n**\n*',
    logic: `Rows: 1 to n (looping backwards from n to 1).
In each row, print stars equal to the current row number.
There are no leading spaces.
Row n prints n stars, row n-1 prints n-1 stars, until row 1.

Key rule: stars = row number (decreasing).`,
    javascriptCode: `function invertedRightTriangle(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'mirrored-right-triangle',
    title: 'Mirrored Right Triangle',
    category: 'Star Patterns',
    preview: '    *\n   **\n  ***\n ****\n*****',
    logic: `Rows: 1 to n.
Spaces: n - row number.
Stars: row number.
The pattern is right-aligned.
In each row, print spaces first, then stars.

Key rule: spaces = n - row, stars = row.`,
    javascriptCode: `function mirroredRightTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= row; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'inverted-mirrored-triangle',
    title: 'Inverted Mirrored Triangle',
    category: 'Star Patterns',
    preview: '*****\n ****\n  ***\n   **\n    *',
    logic: `Rows: n down to 1.
Spaces: n - row number.
Stars: row number.
The pattern is right-aligned and inverted.
Spaces increase as row number decreases.

Key rule: spaces = n - row, stars = row.`,
    javascriptCode: `function invertedMirroredTriangle(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= row; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'full-pyramid',
    title: 'Full Pyramid',
    category: 'Star Patterns',
    preview: '    *\n   ***\n  *****\n *******\n*********',
    logic: `Rows: 1 to n.
Spaces: n - row number.
Stars: 2 * row number - 1.
The pattern is centered.
Each row has an odd number of stars.

Key rule: stars = 2 * row - 1.`,
    javascriptCode: `function fullPyramid(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'inverted-pyramid',
    title: 'Inverted Pyramid',
    category: 'Star Patterns',
    preview: '*********\n *******\n  *****\n   ***\n    *',
    logic: `Rows: n down to 1.
Spaces: n - row number.
Stars: 2 * row number - 1.
The pattern is centered and inverted.
The number of stars decreases by 2 in each row.

Key rule: stars = 2 * row - 1.`,
    javascriptCode: `function invertedPyramid(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'diamond',
    title: 'Diamond',
    category: 'Star Patterns',
    preview: '  *\n ***\n*****\n ***\n  *',
    logic: `Rows: Two parts (1 to n, then n-1 down to 1).
Top half: Full Pyramid logic.
Bottom half: Inverted Pyramid logic.
The pattern is centered and mirrored vertically.

Key rule: Combine pyramid and inverted pyramid.`,
    javascriptCode: `function diamond(n) {
  let result = "";

  // Top half
  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  // Bottom half
  for (let row = n - 1; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'half-diamond',
    title: 'Half Diamond',
    category: 'Star Patterns',
    preview: '*\n**\n***\n**\n*',
    logic: `Rows: Two parts (1 to n, then n-1 down to 1).
Top half: Right Triangle logic.
Bottom half: Inverted Right Triangle logic.
The pattern is left-aligned.

Key rule: stars = row number.`,
    javascriptCode: `function halfDiamond(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    result += "\\n";
  }

  for (let row = n - 1; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'inverted-half-diamond',
    title: 'Inverted Half Diamond',
    category: 'Star Patterns',
    preview: '  *\n **\n***\n **\n  *',
    logic: `Rows: Two parts (1 to n, then n-1 down to 1).
Top half: Mirrored Right Triangle logic.
Bottom half: Inverted Mirrored Triangle logic.
The pattern is right-aligned.

Key rule: spaces = n - row, stars = row.`,
    javascriptCode: `function invertedHalfDiamond(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= row; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  for (let row = n - 1; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= row; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'x-pattern',
    title: 'X Pattern',
    category: 'Star Patterns',
    preview: '*   *\n * * \n  *  \n * * \n*   *',
    logic: `Rows: 1 to n.
Columns: 1 to n.
Print star if col == row OR col == (n - row + 1).
Otherwise, print a space.
This creates two intersecting diagonals.

Key rule: col == row or col == n - row + 1.`,
    javascriptCode: `function xPattern(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      if (col === row || col === (n - row + 1)) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'plus-pattern',
    title: 'Plus Pattern',
    category: 'Star Patterns',
    preview: '  *  \n  *  \n*****\n  *  \n  *  ',
    logic: `Rows: 1 to n.
Columns: 1 to n.
Print star if row == middle OR col == middle.
Middle is calculated as Math.ceil(n / 2).
Otherwise, print a space.

Key rule: row == mid or col == mid.`,
    javascriptCode: `function plusPattern(n) {
  let result = "";
  let mid = Math.ceil(n / 2);

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      if (row === mid || col === mid) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'sandglass',
    title: 'Sandglass',
    category: 'Star Patterns',
    preview: '*****\n *** \n  *  \n *** \n*****',
    logic: `Rows: Two parts (n down to 1, then 2 to n).
Top half: Inverted Pyramid logic.
Bottom half: Full Pyramid logic.
The pattern is centered and looks like an hourglass.

Key rule: Inverted pyramid then full pyramid.`,
    javascriptCode: `function sandglass(n) {
  let result = "";

  // Top half
  for (let row = n; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  // Bottom half
  for (let row = 2; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'butterfly',
    title: 'Butterfly',
    category: 'Star Patterns',
    preview: '*   *\n** **\n*****\n** **\n*   *',
    logic: `Rows: Two parts (1 to n, then n-1 down to 1).
In each row, print stars, then spaces, then stars again.
Spaces: 2 * (n - row).
Stars: row number on each side.

Key rule: stars = row, spaces = 2 * (n - row).`,
    javascriptCode: `function butterfly(n) {
  let result = "";

  // Top half
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) result += "*";
    for (let col = 1; col <= 2 * (n - row); col++) result += " ";
    for (let col = 1; col <= row; col++) result += "*";
    result += "\\n";
  }

  // Bottom half
  for (let row = n - 1; row >= 1; row--) {
    for (let col = 1; col <= row; col++) result += "*";
    for (let col = 1; col <= 2 * (n - row); col++) result += " ";
    for (let col = 1; col <= row; col++) result += "*";
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'zigzag',
    title: 'Zigzag',
    category: 'Star Patterns',
    preview: '  *   *  \n * * * * \n*   *   *',
    logic: `Rows: 1 to 3 (fixed height for simple zigzag).
Columns: 1 to n.
Print star if (row + col) % 4 == 0 OR (row == 2 and col % 4 == 0).
This creates a wave-like pattern.

Key rule: (row + col) % 4 == 0 or (row == 2 and col % 4 == 0).`,
    javascriptCode: `function zigzag(n) {
  let result = "";

  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= n; col++) {
      if ((row + col) % 4 === 0 || (row === 2 && col % 4 === 0)) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hourglass',
    title: 'Hourglass',
    category: 'Star Patterns',
    preview: '*****\n *** \n  *  \n *** \n*****',
    logic: `Rows: Two parts (n down to 1, then 2 to n).
Top: Inverted Pyramid.
Bottom: Full Pyramid.
Similar to sandglass but often used interchangeably.

Key rule: Inverted pyramid + Full pyramid.`,
    javascriptCode: `function hourglass(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  for (let row = 2; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'left-pascal-triangle',
    title: 'Left Pascal Triangle',
    category: 'Star Patterns',
    preview: '*\n**\n***\n**\n*',
    logic: `Rows: 1 to n, then n-1 down to 1.
Stars: equal to row number.
No leading spaces.
It is a left-aligned triangle that grows and then shrinks.

Key rule: stars = row.`,
    javascriptCode: `function leftPascalTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    result += "\\n";
  }

  for (let row = n - 1; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'right-pascal-triangle',
    title: 'Right Pascal Triangle',
    category: 'Star Patterns',
    preview: '  *\n **\n***\n **\n  *',
    logic: `Rows: 1 to n, then n-1 down to 1.
Spaces: n - row.
Stars: row.
It is a right-aligned triangle that grows and then shrinks.

Key rule: spaces = n - row, stars = row.`,
    javascriptCode: `function rightPascalTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= row; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  for (let row = n - 1; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= row; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },

  // --- Hollow Patterns ---
  {
    id: 'hollow-square',
    title: 'Hollow Square',
    category: 'Hollow Patterns',
    preview: '*****\n*   *\n*   *\n*   *\n*****',
    logic: `Rows: 1 to n.
Columns: 1 to n.
Print star if row is 1 or n, OR col is 1 or n.
Otherwise, print a space.
This creates a square border.

Key rule: row == 1 or n, or col == 1 or n.`,
    javascriptCode: `function hollowSquare(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      if (row === 1 || row === n || col === 1 || col === n) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-rectangle',
    title: 'Hollow Rectangle',
    category: 'Hollow Patterns',
    preview: '*******\n*     *\n*******',
    logic: `Rows: 1 to n.
Columns: 1 to m.
Print star if row is 1 or n, OR col is 1 or m.
Otherwise, print a space.
This creates a rectangular border.

Key rule: row == 1 or n, or col == 1 or m.`,
    javascriptCode: `function hollowRectangle(n, m) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= m; col++) {
      if (row === 1 || row === n || col === 1 || col === m) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-right-triangle',
    title: 'Hollow Right Triangle',
    category: 'Hollow Patterns',
    preview: '*\n**\n* *\n*  *\n*****',
    logic: `Rows: 1 to n.
Columns: 1 to row.
Print star if col is 1, OR col is equal to row, OR row is n.
Otherwise, print a space.
This creates a triangle border.

Key rule: col == 1 or col == row or row == n.`,
    javascriptCode: `function hollowRightTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      if (col === 1 || col === row || row === n) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-inverted-triangle',
    title: 'Hollow Inverted Triangle',
    category: 'Hollow Patterns',
    preview: '*****\n*  *\n* *\n**\n*',
    logic: `Rows: n down to 1.
Columns: 1 to row.
Print star if col is 1, OR col is equal to row, OR row is n.
Otherwise, print a space.
This creates an inverted triangle border.

Key rule: col == 1 or col == row or row == n.`,
    javascriptCode: `function hollowInvertedTriangle(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      if (col === 1 || col === row || row === n) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-pyramid',
    title: 'Hollow Pyramid',
    category: 'Hollow Patterns',
    preview: '    *\n   * *\n  *   *\n *     *\n*********',
    logic: `Rows: 1 to n.
Spaces: n - row.
Stars: 2 * row - 1.
Print star if star_index is 1, OR star_index is 2*row-1, OR row is n.
Otherwise, print a space.

Key rule: boundary of pyramid.`,
    javascriptCode: `function hollowPyramid(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1 || row === n) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-inverted-pyramid',
    title: 'Hollow Inverted Pyramid',
    category: 'Hollow Patterns',
    preview: '*********\n *     *\n  *   *\n   * *\n    *',
    logic: `Rows: n down to 1.
Spaces: n - row.
Stars: 2 * row - 1.
Print star if star_index is 1, OR star_index is 2*row-1, OR row is n.
Otherwise, print a space.

Key rule: boundary of inverted pyramid.`,
    javascriptCode: `function hollowInvertedPyramid(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1 || row === n) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-diamond',
    title: 'Hollow Diamond',
    category: 'Hollow Patterns',
    preview: '  *  \n * * \n*   *\n * * \n  *  ',
    logic: `Rows: Two parts (1 to n, then n-1 down to 1).
Spaces: n - row.
Print star if star_index is 1 OR star_index is 2*row-1.
Otherwise, print a space.
This creates a diamond border.

Key rule: col == 1 or col == 2*row - 1.`,
    javascriptCode: `function hollowDiamond(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1) result += "*";
      else result += " ";
    }
    result += "\\n";
  }

  for (let row = n - 1; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1) result += "*";
      else result += " ";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-sandglass',
    title: 'Hollow Sandglass',
    category: 'Hollow Patterns',
    preview: '*****\n * * \n  *  \n * * \n*****',
    logic: `Rows: Two parts (n down to 1, then 2 to n).
Spaces: n - row.
Print star if col is 1, OR col is 2*row-1, OR row is n.
Otherwise, print a space.

Key rule: boundary of sandglass.`,
    javascriptCode: `function hollowSandglass(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1 || row === n) result += "*";
      else result += " ";
    }
    result += "\\n";
  }

  for (let row = 2; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1 || row === n) result += "*";
      else result += " ";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-butterfly',
    title: 'Hollow Butterfly',
    category: 'Hollow Patterns',
    preview: '*   *\n** **\n* * *\n** **\n*   *',
    logic: `Rows: Two parts (1 to n, then n-1 down to 1).
Print star if col is 1, OR col is equal to row.
Print star on the mirrored side as well.
Middle spaces are empty.

Key rule: col == 1 or col == row (on both sides).`,
    javascriptCode: `function hollowButterfly(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      if (col === 1 || col === row) result += "*";
      else result += " ";
    }
    for (let col = 1; col <= 2 * (n - row); col++) result += " ";
    for (let col = 1; col <= row; col++) {
      if (col === 1 || col === row) result += "*";
      else result += " ";
    }
    result += "\\n";
  }

  for (let row = n - 1; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      if (col === 1 || col === row) result += "*";
      else result += " ";
    }
    for (let col = 1; col <= 2 * (n - row); col++) result += " ";
    for (let col = 1; col <= row; col++) {
      if (col === 1 || col === row) result += "*";
      else result += " ";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'hollow-rhombus',
    title: 'Hollow Rhombus',
    category: 'Hollow Patterns',
    preview: '    *****\n   *   *\n  *   *\n *   *\n*****',
    logic: `Rows: 1 to n.
Spaces: n - row.
Stars: n.
Print star if row is 1 or n, OR col is 1 or n.
Otherwise, print a space.

Key rule: spaces = n - row, boundary of square.`,
    javascriptCode: `function hollowRhombus(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let col = 1; col <= n; col++) {
      if (row === 1 || row === n || col === 1 || col === n) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },

  // --- Number Patterns ---
  {
    id: 'simple-number-triangle',
    title: 'Simple Number Triangle',
    category: 'Number Patterns',
    preview: '1\n12\n123\n1234\n12345',
    logic: `Rows: 1 to n.
In each row, print numbers from 1 up to the row number.
No leading spaces.
The value printed is the column index.

Key rule: value = col.`,
    javascriptCode: `function simpleNumberTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += col;
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'repeated-number-triangle',
    title: 'Repeated Number Triangle',
    category: 'Number Patterns',
    preview: '1\n22\n333\n4444\n55555',
    logic: `Rows: 1 to n.
In each row, print the row number repeatedly.
The count of numbers is equal to the row number.
No leading spaces.

Key rule: value = row.`,
    javascriptCode: `function repeatedNumberTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += row;
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'descending-number-triangle',
    title: 'Descending Number Triangle',
    category: 'Number Patterns',
    preview: '5\n54\n543\n5432\n54321',
    logic: `Rows: 1 to n.
In each row, start from n and print numbers downwards.
The number of elements in each row is equal to the row number.

Key rule: value = n - col + 1.`,
    javascriptCode: `function descendingNumberTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += (n - col + 1);
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'reverse-number-triangle',
    title: 'Reverse Number Triangle',
    category: 'Number Patterns',
    preview: '1\n21\n321\n4321\n54321',
    logic: `Rows: 1 to n.
In each row, start from the row number and print down to 1.
The numbers are printed in reverse order.

Key rule: value = row - col + 1.`,
    javascriptCode: `function reverseNumberTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += (row - col + 1);
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'number-pyramid',
    title: 'Number Pyramid',
    category: 'Number Patterns',
    preview: '    1\n   123\n  12345\n 1234567\n123456789',
    logic: `Rows: 1 to n.
Spaces: n - row.
Numbers: 1 to 2*row - 1.
The pattern is centered.
Each row prints a sequence of numbers.

Key rule: value = col.`,
    javascriptCode: `function numberPyramid(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      result += col;
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'inverted-number-pyramid',
    title: 'Inverted Number Pyramid',
    category: 'Number Patterns',
    preview: '123456789\n 1234567\n  12345\n   123\n    1',
    logic: `Rows: n down to 1.
Spaces: n - row.
Numbers: 1 to 2*row - 1.
The pattern is centered and inverted.

Key rule: value = col.`,
    javascriptCode: `function invertedNumberPyramid(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      result += col;
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'floyds-triangle',
    title: 'Floyd’s Triangle',
    category: 'Number Patterns',
    preview: '1\n2 3\n4 5 6\n7 8 9 10',
    logic: `Rows: 1 to n.
Numbers: Increment a counter starting from 1.
Each row prints 'row' number of elements.
Numbers continue from the previous row.

Key rule: counter++.`,
    javascriptCode: `function floydsTriangle(n) {
  let result = "";
  let num = 1;

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += num + " ";
      num++;
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'pascals-triangle',
    title: 'Pascal’s Triangle',
    category: 'Number Patterns',
    preview: '    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1',
    logic: `Rows: 0 to n-1.
Spaces: n - row.
Values: Calculated using binomial coefficient formula.
Each number is the sum of the two numbers above it.

Key rule: val = val * (row - col) / (col + 1).`,
    javascriptCode: `function pascalsTriangle(n) {
  let result = "";

  for (let row = 0; row < n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    let val = 1;
    for (let col = 0; col <= row; col++) {
      result += val + " ";
      val = val * (row - col) / (col + 1);
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'binary-triangle',
    title: 'Binary Triangle',
    category: 'Number Patterns',
    preview: '1\n01\n101\n0101\n10101',
    logic: `Rows: 1 to n.
Value: Print 1 if (row + col) is even, else 0.
This creates an alternating pattern of 0s and 1s.

Key rule: (row + col) % 2 == 0 ? 1 : 0.`,
    javascriptCode: `function binaryTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      if ((row + col) % 2 === 0) {
        result += "1";
      } else {
        result += "0";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'palindromic-number-pyramid',
    title: 'Palindromic Number Pyramid',
    category: 'Number Patterns',
    preview: '    1\n   121\n  12321\n 1234321\n123454321',
    logic: `Rows: 1 to n.
Spaces: n - row.
Numbers: 1 to row, then row-1 down to 1.
This creates a centered palindrome in each row.

Key rule: Ascending then descending numbers.`,
    javascriptCode: `function palindromicNumberPyramid(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= row; col++) result += col;
    for (let col = row - 1; col >= 1; col--) result += col;
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'centered-number-pyramid',
    title: 'Centered Number Pyramid',
    category: 'Number Patterns',
    preview: '    1\n   232\n  34543\n 4567654\n567898765',
    logic: `Rows: 1 to n.
Spaces: n - row.
Start value: row.
Numbers: row to 2*row-1, then 2*row-2 down to row.

Key rule: row-based palindrome.`,
    javascriptCode: `function centeredNumberPyramid(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    let num = row;
    for (let col = 1; col <= row; col++) {
      result += num;
      num++;
    }
    num -= 2;
    for (let col = 1; col < row; col++) {
      result += num;
      num--;
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'number-diamond',
    title: 'Number Diamond',
    category: 'Number Patterns',
    preview: '  1  \n 121 \n12321\n 121 \n  1  ',
    logic: `Rows: Two parts (1 to n, then n-1 down to 1).
Each row is a palindromic number sequence.
The pattern is centered.

Key rule: pyramid + inverted pyramid with palindromes.`,
    javascriptCode: `function numberDiamond(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= row; col++) result += col;
    for (let col = row - 1; col >= 1; col--) result += col;
    result += "\\n";
  }

  for (let row = n - 1; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= row; col++) result += col;
    for (let col = row - 1; col >= 1; col--) result += col;
    result += "\\n";
  }

  return result;
}`
  },

  // --- Alphabet Patterns ---
  {
    id: 'alphabet-triangle',
    title: 'Alphabet Triangle',
    category: 'Alphabet Patterns',
    preview: 'A\nAB\nABC\nABCD\nABCDE',
    logic: `Rows: 1 to n.
Characters: 'A' + (col - 1).
In each row, print characters from A up to the row-th letter.

Key rule: char = String.fromCharCode(64 + col).`,
    javascriptCode: `function alphabetTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += String.fromCharCode(64 + col);
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'repeated-alphabet-triangle',
    title: 'Repeated Alphabet Triangle',
    category: 'Alphabet Patterns',
    preview: 'A\nBB\nCCC\nDDDD\nEEEEE',
    logic: `Rows: 1 to n.
Character: 'A' + (row - 1).
In each row, print the same character repeatedly.

Key rule: char = String.fromCharCode(64 + row).`,
    javascriptCode: `function repeatedAlphabetTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += String.fromCharCode(64 + row);
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'reverse-alphabet-triangle',
    title: 'Reverse Alphabet Triangle',
    category: 'Alphabet Patterns',
    preview: 'A\nBA\nCBA\nDCBA\nEDCBA',
    logic: `Rows: 1 to n.
Characters: Start from 'A' + (row - 1) and go down to 'A'.

Key rule: char = String.fromCharCode(64 + row - col + 1).`,
    javascriptCode: `function reverseAlphabetTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += String.fromCharCode(64 + row - col + 1);
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'alphabet-pyramid',
    title: 'Alphabet Pyramid',
    category: 'Alphabet Patterns',
    preview: '    A\n   ABC\n  ABCDE\n ABCDEFG\nABCDEFGHI',
    logic: `Rows: 1 to n.
Spaces: n - row.
Characters: A to (2*row - 1)-th letter.
Centered pyramid with letters.

Key rule: char = String.fromCharCode(64 + col).`,
    javascriptCode: `function alphabetPyramid(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      result += String.fromCharCode(64 + col);
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'alphabet-diamond',
    title: 'Alphabet Diamond',
    category: 'Alphabet Patterns',
    preview: '  A  \n ABC \nABCDE\n ABC \n  A  ',
    logic: `Rows: Two parts (1 to n, then n-1 down to 1).
Centered diamond using alphabet sequences.

Key rule: pyramid + inverted pyramid with letters.`,
    javascriptCode: `function alphabetDiamond(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= 2 * row - 1; col++) {
      result += String.fromCharCode(64 + col);
    }
    result += "\\n";
  }

  for (let row = n - 1; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) result += " ";
    for (let col = 1; col <= 2 * row - 1; col++) {
      result += String.fromCharCode(64 + col);
    }
    result += "\\n";
  }

  return result;
}`
  },

  // --- Special Patterns ---
  {
    id: 'pyramid-increasing-width',
    title: 'Pyramid with Increasing Width',
    category: 'Special Patterns',
    preview: '  *\n ***\n*****\n*******',
    logic: `Rows: 1 to n.
Spaces: n - row.
Stars: row * 2 - 1.
Standard pyramid where width increases by 2 stars per row.

Key rule: stars = 2 * row - 1.`,
    javascriptCode: `function pyramidIncreasingWidth(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'reverse-centered-triangle',
    title: 'Reverse Centered Triangle',
    category: 'Special Patterns',
    preview: '*****\n *** \n  *  ',
    logic: `Rows: n down to 1.
Spaces: n - row.
Stars: 2 * row - 1.
Centered inverted triangle.

Key rule: stars = 2 * row - 1.`,
    javascriptCode: `function reverseCenteredTriangle(n) {
  let result = "";

  for (let row = n; row >= 1; row--) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'rhombus',
    title: 'Rhombus',
    category: 'Special Patterns',
    preview: '    *****\n   *****\n  *****\n *****\n*****',
    logic: `Rows: 1 to n.
Spaces: n - row.
Stars: n.
A square shifted by leading spaces.

Key rule: spaces = n - row, stars = n.`,
    javascriptCode: `function rhombus(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      result += " ";
    }
    for (let stars = 1; stars <= n; stars++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'checkerboard-pattern',
    title: 'Checkerboard Pattern',
    category: 'Special Patterns',
    preview: '* * * *\n * * * \n* * * *\n * * * ',
    logic: `Rows: 1 to n.
Columns: 1 to n.
Print star if (row + col) is even, else space.
Creates a grid of alternating stars and spaces.

Key rule: (row + col) % 2 == 0.`,
    javascriptCode: `function checkerboard(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      if ((row + col) % 2 === 0) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'stair-pattern',
    title: 'Stair Pattern',
    category: 'Special Patterns',
    preview: '*\n**\n***\n****',
    logic: `Rows: 1 to n.
Stars: equal to row number.
Same as Right Triangle.

Key rule: stars = row.`,
    javascriptCode: `function stairPattern(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'wave-pattern',
    title: 'Wave Pattern',
    category: 'Special Patterns',
    preview: ' *   * \n* * * *\n     ',
    logic: `Rows: 1 to 3.
Columns: 1 to n.
Print star based on sine-like wave logic.

Key rule: (row + col) % 4 == 0.`,
    javascriptCode: `function wavePattern(n) {
  let result = "";

  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= n; col++) {
      if ((row + col) % 4 === 0 || (row === 2 && col % 4 === 0)) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'cross-pattern',
    title: 'Cross Pattern',
    category: 'Special Patterns',
    preview: '  *  \n  *  \n*****\n  *  \n  *  ',
    logic: `Rows: 1 to n.
Columns: 1 to n.
Print star if row is middle OR col is middle.

Key rule: row == mid or col == mid.`,
    javascriptCode: `function crossPattern(n) {
  let result = "";
  let mid = Math.ceil(n / 2);

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      if (row === mid || col === mid) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'border-pattern',
    title: 'Border Pattern',
    category: 'Special Patterns',
    preview: '*****\n*   *\n*****',
    logic: `Rows: 1 to n.
Columns: 1 to m.
Print star if row is 1 or n, OR col is 1 or m.

Key rule: boundary check.`,
    javascriptCode: `function borderPattern(n, m) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= m; col++) {
      if (row === 1 || row === n || col === 1 || col === m) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\\n";
  }

  return result;
}`
  },
  {
    id: 'twin-triangle-pattern',
    title: 'Twin Triangle Pattern',
    category: 'Special Patterns',
    preview: '*   *\n**  **\n*** ***',
    logic: `Rows: 1 to n.
Print two right triangles side by side with spaces in between.

Key rule: two triangles in one row loop.`,
    javascriptCode: `function twinTriangle(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) result += "*";
    for (let col = 1; col <= 2 * (n - row); col++) result += " ";
    for (let col = 1; col <= row; col++) result += "*";
    result += "\\n";
  }

  return result;
}`
  },
];
