import {
  HexString,
  NumString,
  Byte,
  Bytes2,
  Bytes3,
  Bytes32,
  Bytes4,
  Bytes5,
  Bytes6,
  Bytes7,
  Bytes8,
  Bytes9,
  Bytes10,
  Bytes11,
  Bytes12,
  Bytes13,
  Bytes14,
  Bytes15,
  Bytes16,
  Bytes17,
  Bytes18,
  Bytes19,
  Bytes20,
  Bytes21,
  Bytes22,
  Bytes23,
  Bytes24,
  Bytes25,
  Bytes26,
  Bytes27,
  Bytes28,
  Bytes29,
  Bytes30,
  Bytes31,
  Uint8,
  Uint16,
  Uint24,
  Uint32,
  Uint40,
  Uint48,
  Uint56,
  Uint64,
  Uint72,
  Uint80,
  Uint88,
  Uint96,
  Uint104,
  Uint112,
  Uint120,
  Uint128,
  Uint136,
  Uint144,
  Uint152,
  Uint160,
  Uint168,
  Uint176,
  Uint184,
  Uint192,
  Uint200,
  Uint208,
  Uint216,
  Uint224,
  Uint232,
  Uint240,
  Uint248,
  Uint256,
  Address
} from '../index'

describe('HexString', () => {
  test('Hex string accepts only 0x starting string', () => {
    expect(() => HexString.from('13')).toThrow()
    expect(() => new HexString('0x13')).not.toThrow()
  })
  test('HexString.toString() returns 0x starting string', () => {
    expect(HexString.from('0x13').toString()).toBe('0x13')
  })
})

describe('NumString', () => {
  test('Num string does not start with 0x', () => {
    expect(() => NumString.from('0x13')).toThrow()
    expect(() => new NumString('13')).not.toThrow()
  })
  test('NumString.toString() does not start with 0x', () => {
    expect(NumString.from('13').toString()).toBe('13')
  })
})

describe('Bytes', () => {
  describe('Byte', () => {
    test('only accept 1 bytes hex string', () => {
      expect(() => Byte.from('0x12')).not.toThrow()
      expect(() => Byte.from('0x1212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Byte.from('12').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Byte.from('0x0').toString()).toBe('0x00')
    })
    test('can convert to Uint8', () => {
      expect(Byte.from('0x12').toUint()).toBeDefined()
    })
  })

  describe('Bytes2', () => {
    test('only accept 2 bytes hex string', () => {
      expect(() => Bytes2.from('0x1212')).not.toThrow()
      expect(() => Bytes2.from('0x121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes2.from('1212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes2.from('0x0').toString()).toBe('0x0000')
    })
    test('can convert to Uint16', () => {
      expect(Bytes2.from('0x1212').toUint()).toBeDefined()
    })
  })

  describe('Bytes3', () => {
    test('only accept 3 bytes hex string', () => {
      expect(() => Bytes3.from('0x121212')).not.toThrow()
      expect(() => Bytes3.from('0x12121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes3.from('121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes3.from('0x0').toString()).toBe('0x000000')
    })
    test('can convert to Uint24', () => {
      expect(Bytes3.from('0x121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes4', () => {
    test('only accept 4 bytes hex string', () => {
      expect(() => Bytes4.from('0x12121212')).not.toThrow()
      expect(() => Bytes4.from('0x1212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes4.from('12121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes4.from('0x0').toString()).toBe('0x00000000')
    })
    test('can convert to Uint32', () => {
      expect(Bytes4.from('0x12121212').toUint()).toBeDefined()
    })
  })

  test('should fill left padding zeroes', () => {
    expect(Bytes4.from('0x0').toString()).toBe('0x00000000')
  })

  describe('Bytes5', () => {
    test('only accept 5 bytes hex string', () => {
      expect(() => Bytes5.from('0x1212121212')).not.toThrow()
      expect(() => Bytes5.from('0x121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes5.from('1212121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes5.from('0x0').toString()).toBe('0x0000000000')
    })
    test('can convert to Uint40', () => {
      expect(Bytes5.from('0x1212121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes6', () => {
    test('only accept 6 bytes hex string', () => {
      expect(() => Bytes6.from('0x121212121212')).not.toThrow()
      expect(() => Bytes6.from('0x12121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes6.from('121212121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes6.from('0x0').toString()).toBe('0x000000000000')
    })
    test('can convert to Uint48', () => {
      expect(Bytes6.from('0x121212121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes7', () => {
    test('only accept 7 bytes hex string', () => {
      expect(() => Bytes7.from('0x12121212121212')).not.toThrow()
      expect(() => Bytes7.from('0x1212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes7.from('12121212121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes7.from('0x0').toString()).toBe('0x00000000000000')
    })
    test('can convert to Uint56', () => {
      expect(Bytes7.from('0x12121212121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes8', () => {
    test('only accept 8 bytes hex string', () => {
      expect(() => Bytes8.from('0x1212121212121212')).not.toThrow()
      expect(() => Bytes8.from('0x121212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes8.from('1212121212121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes8.from('0x0').toString()).toBe('0x0000000000000000')
    })
    test('can convert to Uint64', () => {
      expect(Bytes8.from('0x1212121212121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes9', () => {
    test('only accept 9 bytes hex string', () => {
      expect(() => Bytes9.from('0x121212121212121212')).not.toThrow()
      expect(() => Bytes9.from('0x12121212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes9.from('121212121212121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes9.from('0x0').toString()).toBe('0x000000000000000000')
    })
    test('can convert to Uint72', () => {
      expect(Bytes9.from('0x121212121212121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes10', () => {
    test('only accept 10 bytes hex string', () => {
      expect(() => Bytes10.from('0x12121212121212121212')).not.toThrow()
      expect(() => Bytes10.from('0x1212121212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes10.from('12121212121212121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes10.from('0x0').toString()).toBe('0x00000000000000000000')
    })
    test('can convert to Uint80', () => {
      expect(Bytes10.from('0x12121212121212121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes11', () => {
    test('only accept 11 bytes hex string', () => {
      expect(() => Bytes11.from('0x1212121212121212121212')).not.toThrow()
      expect(() => Bytes11.from('0x121212121212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes11.from('1212121212121212121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes11.from('0x0').toString()).toBe('0x0000000000000000000000')
    })
    test('can convert to Uint88', () => {
      expect(Bytes11.from('0x1212121212121212121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes12', () => {
    test('only accept 12 bytes hex string', () => {
      expect(() => Bytes12.from('0x121212121212121212121212')).not.toThrow()
      expect(() => Bytes12.from('0x12121212121212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() => Bytes12.from('121212121212121212121212').toUint()).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes12.from('0x0').toString()).toBe('0x000000000000000000000000')
    })
    test('can convert to Uint96', () => {
      expect(Bytes12.from('0x121212121212121212121212').toUint()).toBeDefined()
    })
  })

  describe('Bytes13', () => {
    test('only accept 13 bytes hex string', () => {
      expect(() => Bytes13.from('0x12121212121212121212121212')).not.toThrow()
      expect(() => Bytes13.from('0x1212121212121212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes13.from('12121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes13.from('0x0').toString()).toBe(
        '0x00000000000000000000000000'
      )
    })
    test('can convert to Uint104', () => {
      expect(
        Bytes13.from('0x12121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes14', () => {
    test('only accept 14 bytes hex string', () => {
      expect(() => Bytes14.from('0x1212121212121212121212121212')).not.toThrow()
      expect(() => Bytes14.from('0x121212121212121212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes14.from('1212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes14.from('0x0').toString()).toBe(
        '0x0000000000000000000000000000'
      )
    })
    test('can convert to Uint112', () => {
      expect(
        Bytes14.from('0x1212121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes15', () => {
    test('only accept 15 bytes hex string', () => {
      expect(() =>
        Bytes15.from('0x121212121212121212121212121212')
      ).not.toThrow()
      expect(() => Bytes15.from('0x12121212121212121212121212121212')).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes15.from('121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes15.from('0x0').toString()).toBe(
        '0x000000000000000000000000000000'
      )
    })
    test('can convert to Uint120', () => {
      expect(
        Bytes15.from('0x121212121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes16', () => {
    test('only accept 16 bytes hex string', () => {
      expect(() =>
        Bytes16.from('0x12121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes16.from('0x1212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes16.from('12121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes16.from('0x0').toString()).toBe(
        '0x00000000000000000000000000000000'
      )
    })
    test('can convert to Uint128', () => {
      expect(
        Bytes16.from('0x12121212121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes17', () => {
    test('only accept 17 bytes hex string', () => {
      expect(() =>
        Bytes17.from('0x1212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes17.from('0x121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes17.from('1212121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes17.from('0x0').toString()).toBe(
        '0x0000000000000000000000000000000000'
      )
    })
    test('can convert to Uint136', () => {
      expect(
        Bytes17.from('0x1212121212121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes18', () => {
    test('only accept 18 bytes hex string', () => {
      expect(() =>
        Bytes18.from('0x121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes18.from('0x12121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes18.from('121212121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes18.from('0x0').toString()).toBe(
        '0x000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint144', () => {
      expect(
        Bytes18.from('0x121212121212121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes19', () => {
    test('only accept 19 bytes hex string', () => {
      expect(() =>
        Bytes19.from('0x12121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes19.from('0x1212121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes19.from('12121212121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes19.from('0x0').toString()).toBe(
        '0x00000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint152', () => {
      expect(
        Bytes19.from('0x12121212121212121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes20', () => {
    test('only accept 20 bytes hex string', () => {
      expect(() =>
        Bytes20.from('0x1212121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes20.from('0x121212121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes20.from('1212121212121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes20.from('0x0').toString()).toBe(
        '0x0000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint160', () => {
      expect(
        Bytes20.from('0x1212121212121212121212121212121212121212').toUint()
      ).toBeDefined()
    })
    test('can convert to Address', () => {
      expect(
        Bytes20.from('0x1212121212121212121212121212121212121212').toAddress()
      ).toBeDefined()
    })
  })

  describe('Bytes21', () => {
    test('only accept 21 bytes hex string', () => {
      expect(() =>
        Bytes21.from('0x121212121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes21.from('0x12121212121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes21.from('121212121212121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes21.from('0x0').toString()).toBe(
        '0x000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint168', () => {
      expect(
        Bytes21.from('0x121212121212121212121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes22', () => {
    test('only accept 22 bytes hex string', () => {
      expect(() =>
        Bytes22.from('0x12121212121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes22.from('0x1212121212121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes22.from('12121212121212121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes22.from('0x0').toString()).toBe(
        '0x00000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint176', () => {
      expect(
        Bytes22.from('0x12121212121212121212121212121212121212121212').toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes23', () => {
    test('only accept 23 bytes hex string', () => {
      expect(() =>
        Bytes23.from('0x1212121212121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes23.from('0x121212121212121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes23.from('1212121212121212121212121212121212121212121212').toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes23.from('0x0').toString()).toBe(
        '0x0000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint184', () => {
      expect(
        Bytes23.from(
          '0x1212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes24', () => {
    test('only accept 24 bytes hex string', () => {
      expect(() =>
        Bytes24.from('0x121212121212121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes24.from('0x12121212121212121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes24.from(
          '121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes24.from('0x0').toString()).toBe(
        '0x000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint192', () => {
      expect(
        Bytes24.from(
          '0x121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes25', () => {
    test('only accept 25 bytes hex string', () => {
      expect(() =>
        Bytes25.from('0x12121212121212121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes25.from('0x1212121212121212121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes25.from(
          '12121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes25.from('0x0').toString()).toBe(
        '0x00000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint200', () => {
      expect(
        Bytes25.from(
          '0x12121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes26', () => {
    test('only accept 26 bytes hex string', () => {
      expect(() =>
        Bytes26.from('0x1212121212121212121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes26.from('0x121212121212121212121212121212121212121212121212121212')
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes26.from(
          '1212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes26.from('0x0').toString()).toBe(
        '0x0000000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint208', () => {
      expect(
        Bytes26.from(
          '0x1212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes27', () => {
    test('only accept 27 bytes hex string', () => {
      expect(() =>
        Bytes27.from('0x121212121212121212121212121212121212121212121212121212')
      ).not.toThrow()
      expect(() =>
        Bytes27.from(
          '0x12121212121212121212121212121212121212121212121212121212'
        )
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes27.from(
          '121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes27.from('0x0').toString()).toBe(
        '0x000000000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint216', () => {
      expect(
        Bytes27.from(
          '0x121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes28', () => {
    test('only accept 28 bytes hex string', () => {
      expect(() =>
        Bytes28.from(
          '0x12121212121212121212121212121212121212121212121212121212'
        )
      ).not.toThrow()
      expect(() =>
        Bytes28.from(
          '0x1212121212121212121212121212121212121212121212121212121212'
        )
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes28.from(
          '12121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes28.from('0x0').toString()).toBe(
        '0x00000000000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint224', () => {
      expect(
        Bytes28.from(
          '0x12121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes29', () => {
    test('only accept 29 bytes hex string', () => {
      expect(() =>
        Bytes29.from(
          '0x1212121212121212121212121212121212121212121212121212121212'
        )
      ).not.toThrow()
      expect(() =>
        Bytes29.from(
          '0x121212121212121212121212121212121212121212121212121212121212'
        )
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes29.from(
          '1212121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes29.from('0x0').toString()).toBe(
        '0x0000000000000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint232', () => {
      expect(
        Bytes29.from(
          '0x1212121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes30', () => {
    test('only accept 30 bytes hex string', () => {
      expect(() =>
        Bytes30.from(
          '0x121212121212121212121212121212121212121212121212121212121212'
        )
      ).not.toThrow()
      expect(() =>
        Bytes30.from(
          '0x12121212121212121212121212121212121212121212121212121212121212'
        )
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes30.from(
          '121212121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes30.from('0x0').toString()).toBe(
        '0x000000000000000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint240', () => {
      expect(
        Bytes30.from(
          '0x121212121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes31', () => {
    test('only accept 31 bytes hex string', () => {
      expect(() =>
        Bytes31.from(
          '0x12121212121212121212121212121212121212121212121212121212121212'
        )
      ).not.toThrow()
      expect(() =>
        Bytes31.from(
          '0x1212121212121212121212121212121212121212121212121212121212121212'
        )
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes31.from(
          '12121212121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes31.from('0x0').toString()).toBe(
        '0x00000000000000000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint248', () => {
      expect(
        Bytes31.from(
          '0x12121212121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })

  describe('Bytes32', () => {
    test('only accept 32 bytes hex string', () => {
      expect(() =>
        Bytes32.from(
          '0x1212121212121212121212121212121212121212121212121212121212121212'
        )
      ).not.toThrow()
      expect(() =>
        Bytes32.from(
          '0x121212121212121212121212121212121212121212121212121212121212121212'
        )
      ).toThrow()
    })
    test('does not accept non-0x string', () => {
      expect(() =>
        Bytes32.from(
          '1212121212121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toThrow()
    })
    test('should fill left padding zeroes', () => {
      expect(Bytes32.from('0x0').toString()).toBe(
        '0x0000000000000000000000000000000000000000000000000000000000000000'
      )
    })
    test('can convert to Uint256', () => {
      expect(
        Bytes32.from(
          '0x1212121212121212121212121212121212121212121212121212121212121212'
        ).toUint()
      ).toBeDefined()
    })
  })
})

describe('Uint', () => {
  describe('Uint8', () => {
    test('only accepts string under 1 << 8', () => {
      expect(() => Uint8.from('256')).toThrow()
      expect(() => Uint8.from('255')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint8.from('0x13')).toThrow()
      expect(() => Uint8.from('13')).not.toThrow()
    })
    test('can be converted to Byte', () => {
      expect(Uint8.from('1').toByte()).toBeInstanceOf(Byte)
    })
  })

  describe('Uint16', () => {
    test('only accepts string under 1 << 16', () => {
      expect(() => Uint16.from('65536')).toThrow()
      expect(() => Uint16.from('65535')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint16.from('0x13')).toThrow()
      expect(() => Uint16.from('13')).not.toThrow()
    })
    test('can be converted to Bytes2', () => {
      expect(Uint16.from('12').toBytes()).toBeInstanceOf(Bytes2)
    })
  })

  describe('Uint24', () => {
    test('only accepts string under 1 << 24', () => {
      expect(() => Uint24.from('16777216')).toThrow()
      expect(() => Uint24.from('16777215')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint24.from('0x13')).toThrow()
      expect(() => Uint24.from('13')).not.toThrow()
    })
    test('can be converted to Bytes3', () => {
      expect(Uint24.from('255').toBytes()).toBeInstanceOf(Bytes3)
    })
  })

  describe('Uint32', () => {
    test('only accepts string under 1 << 32', () => {
      expect(() => Uint32.from('4294967296')).toThrow()
      expect(() => Uint32.from('4294967295')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint32.from('0x13')).toThrow()
      expect(() => Uint32.from('13')).not.toThrow()
    })
    test('can be converted to Bytes4', () => {
      expect(Uint32.from('65535').toBytes()).toBeInstanceOf(Bytes4)
    })
  })

  describe('Uint40', () => {
    test('only accepts string under 1 << 40', () => {
      expect(() => Uint40.from('1099511627776')).toThrow()
      expect(() => Uint40.from('1099511627775')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint40.from('0x13')).toThrow()
      expect(() => Uint40.from('13')).not.toThrow()
    })
    test('can be converted to Bytes5', () => {
      expect(Uint40.from('16777215').toBytes()).toBeInstanceOf(Bytes5)
    })
  })

  describe('Uint48', () => {
    test('only accepts string under 1 << 48', () => {
      expect(() => Uint48.from('281474976710656')).toThrow()
      expect(() => Uint48.from('281474976710655')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint48.from('0x13')).toThrow()
      expect(() => Uint48.from('13')).not.toThrow()
    })
    test('can be converted to Bytes6', () => {
      expect(Uint48.from('4294967295').toBytes()).toBeInstanceOf(Bytes6)
    })
  })

  describe('Uint56', () => {
    test('only accepts string under 1 << 56', () => {
      expect(() => Uint56.from('72057594037927936')).toThrow()
      expect(() => Uint56.from('72057594037927935')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint56.from('0x13')).toThrow()
      expect(() => Uint56.from('13')).not.toThrow()
    })
    test('can be converted to Bytes7', () => {
      expect(Uint56.from('1099511627775').toBytes()).toBeInstanceOf(Bytes7)
    })
  })

  describe('Uint64', () => {
    test('only accepts string under 1 << 64', () => {
      expect(() => Uint64.from('18446744073709551616')).toThrow()
      expect(() => Uint64.from('18446744073709551615')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint64.from('0x13')).toThrow()
      expect(() => Uint64.from('13')).not.toThrow()
    })
    test('can be converted to Bytes8', () => {
      expect(Uint64.from('281474976710655').toBytes()).toBeInstanceOf(Bytes8)
    })
  })

  describe('Uint72', () => {
    test('only accepts string under 1 << 72', () => {
      expect(() => Uint72.from('4722366482869645213696')).toThrow()
      expect(() => Uint72.from('4722366482869645213695')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint72.from('0x13')).toThrow()
      expect(() => Uint72.from('13')).not.toThrow()
    })
    test('can be converted to Bytes9', () => {
      expect(Uint72.from('72057594037927935').toBytes()).toBeInstanceOf(Bytes9)
    })
  })

  describe('Uint80', () => {
    test('only accepts string under 1 << 80', () => {
      expect(() => Uint80.from('1208925819614629174706176')).toThrow()
      expect(() => Uint80.from('1208925819614629174706175')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint80.from('0x13')).toThrow()
      expect(() => Uint80.from('13')).not.toThrow()
    })
    test('can be converted to Bytes10', () => {
      expect(Uint80.from('18446744073709551615').toBytes()).toBeInstanceOf(
        Bytes10
      )
    })
  })

  describe('Uint88', () => {
    test('only accepts string under 1 << 88', () => {
      expect(() => Uint88.from('309485009821345068724781056')).toThrow()
      expect(() => Uint88.from('309485009821345068724781055')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint88.from('0x13')).toThrow()
      expect(() => Uint88.from('13')).not.toThrow()
    })
    test('can be converted to Bytes11', () => {
      expect(Uint88.from('4722366482869645213695').toBytes()).toBeInstanceOf(
        Bytes11
      )
    })
  })

  describe('Uint96', () => {
    test('only accepts string under 1 << 96', () => {
      expect(() => Uint96.from('79228162514264337593543950336')).toThrow()
      expect(() => Uint96.from('79228162514264337593543950335')).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint96.from('0x13')).toThrow()
      expect(() => Uint96.from('13')).not.toThrow()
    })
    test('can be converted to Bytes12', () => {
      expect(Uint96.from('1208925819614629174706175').toBytes()).toBeInstanceOf(
        Bytes12
      )
    })
  })

  describe('Uint104', () => {
    test('only accepts string under 1 << 104', () => {
      expect(() => Uint104.from('20282409603651670423947251286016')).toThrow()
      expect(() =>
        Uint104.from('20282409603651670423947251286015')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint104.from('0x13')).toThrow()
      expect(() => Uint104.from('13')).not.toThrow()
    })
    test('can be converted to Bytes13', () => {
      expect(
        Uint104.from('309485009821345068724781055').toBytes()
      ).toBeInstanceOf(Bytes13)
    })
  })

  describe('Uint112', () => {
    test('only accepts string under 1 << 112', () => {
      expect(() => Uint112.from('5192296858534827628530496329220096')).toThrow()
      expect(() =>
        Uint112.from('5192296858534827628530496329220095')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint112.from('0x13')).toThrow()
      expect(() => Uint112.from('13')).not.toThrow()
    })
    test('can be converted to Bytes14', () => {
      expect(
        Uint112.from('79228162514264337593543950335').toBytes()
      ).toBeInstanceOf(Bytes14)
    })
  })

  describe('Uint120', () => {
    test('only accepts string under 1 << 120', () => {
      expect(() =>
        Uint120.from('1329227995784915872903807060280344576')
      ).toThrow()
      expect(() =>
        Uint120.from('1329227995784915872903807060280344575')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint120.from('0x13')).toThrow()
      expect(() => Uint120.from('13')).not.toThrow()
    })
    test('can be converted to Bytes15', () => {
      expect(
        Uint120.from('20282409603651670423947251286015').toBytes()
      ).toBeInstanceOf(Bytes15)
    })
  })

  describe('Uint128', () => {
    test('only accepts string under 1 << 128', () => {
      expect(() =>
        Uint128.from('340282366920938463463374607431768211456')
      ).toThrow()
      expect(() =>
        Uint128.from('340282366920938463463374607431768211455')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint128.from('0x13')).toThrow()
      expect(() => Uint128.from('13')).not.toThrow()
    })
    test('can be converted to Bytes16', () => {
      expect(
        Uint128.from('5192296858534827628530496329220095').toBytes()
      ).toBeInstanceOf(Bytes16)
    })
  })

  describe('Uint136', () => {
    test('only accepts string under 1 << 136', () => {
      expect(() =>
        Uint136.from('87112285931760246646623899502532662132736')
      ).toThrow()
      expect(() =>
        Uint136.from('87112285931760246646623899502532662132735')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint136.from('0x13')).toThrow()
      expect(() => Uint136.from('13')).not.toThrow()
    })
    test('can be converted to Bytes17', () => {
      expect(
        Uint136.from('1329227995784915872903807060280344575').toBytes()
      ).toBeInstanceOf(Bytes17)
    })
  })

  describe('Uint144', () => {
    test('only accepts string under 1 << 144', () => {
      expect(() =>
        Uint144.from('22300745198530623141535718272648361505980416')
      ).toThrow()
      expect(() =>
        Uint144.from('22300745198530623141535718272648361505980415')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint144.from('0x13')).toThrow()
      expect(() => Uint144.from('13')).not.toThrow()
    })
    test('can be converted to Bytes18', () => {
      expect(
        Uint144.from('340282366920938463463374607431768211455').toBytes()
      ).toBeInstanceOf(Bytes18)
    })
  })

  describe('Uint152', () => {
    test('only accepts string under 1 << 152', () => {
      expect(() =>
        Uint152.from('5708990770823839524233143877797980545530986496')
      ).toThrow()
      expect(() =>
        Uint152.from('5708990770823839524233143877797980545530986495')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint152.from('0x13')).toThrow()
      expect(() => Uint152.from('13')).not.toThrow()
    })
    test('can be converted to Bytes19', () => {
      expect(
        Uint152.from('87112285931760246646623899502532662132735').toBytes()
      ).toBeInstanceOf(Bytes19)
    })
  })

  describe('Uint160', () => {
    test('only accepts string under 1 << 160', () => {
      expect(() =>
        Uint160.from('1461501637330902918203684832716283019655932542976')
      ).toThrow()
      expect(() =>
        Uint160.from('1461501637330902918203684832716283019655932542975')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint160.from('0x13')).toThrow()
      expect(() => Uint160.from('13')).not.toThrow()
    })
    test('can be converted to Bytes20', () => {
      expect(
        Uint160.from('22300745198530623141535718272648361505980415').toBytes()
      ).toBeInstanceOf(Bytes20)
    })
  })

  describe('Uint168', () => {
    test('only accepts string under 1 << 168', () => {
      expect(() =>
        Uint168.from('374144419156711147060143317175368453031918731001856')
      ).toThrow()
      expect(() =>
        Uint168.from('374144419156711147060143317175368453031918731001855')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint168.from('0x13')).toThrow()
      expect(() => Uint168.from('13')).not.toThrow()
    })
    test('can be converted to Bytes21', () => {
      expect(
        Uint168.from('5708990770823839524233143877797980545530986495').toBytes()
      ).toBeInstanceOf(Bytes21)
    })
  })

  describe('Uint176', () => {
    test('only accepts string under 1 << 176', () => {
      expect(() =>
        Uint176.from('95780971304118053647396689196894323976171195136475136')
      ).toThrow()
      expect(() =>
        Uint176.from('95780971304118053647396689196894323976171195136475135')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint176.from('0x13')).toThrow()
      expect(() => Uint176.from('13')).not.toThrow()
    })
    test('can be converted to Bytes22', () => {
      expect(
        Uint176.from(
          '1461501637330902918203684832716283019655932542975'
        ).toBytes()
      ).toBeInstanceOf(Bytes22)
    })
  })

  describe('Uint184', () => {
    test('only accepts string under 1 << 184', () => {
      expect(() =>
        Uint184.from('24519928653854221733733552434404946937899825954937634816')
      ).toThrow()
      expect(() =>
        Uint184.from('24519928653854221733733552434404946937899825954937634815')
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint184.from('0x13')).toThrow()
      expect(() => Uint184.from('13')).not.toThrow()
    })
    test('can be converted to Bytes23', () => {
      expect(
        Uint184.from(
          '374144419156711147060143317175368453031918731001855'
        ).toBytes()
      ).toBeInstanceOf(Bytes23)
    })
  })

  describe('Uint192', () => {
    test('only accepts string under 1 << 192', () => {
      expect(() =>
        Uint192.from(
          '6277101735386680763835789423207666416102355444464034512896'
        )
      ).toThrow()
      expect(() =>
        Uint192.from(
          '6277101735386680763835789423207666416102355444464034512895'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint192.from('0x13')).toThrow()
      expect(() => Uint192.from('13')).not.toThrow()
    })
    test('can be converted to Bytes24', () => {
      expect(
        Uint192.from(
          '95780971304118053647396689196894323976171195136475135'
        ).toBytes()
      ).toBeInstanceOf(Bytes24)
    })
  })

  describe('Uint200', () => {
    test('only accepts string under 1 << 200', () => {
      expect(() =>
        Uint200.from(
          '1606938044258990275541962092341162602522202993782792835301376'
        )
      ).toThrow()
      expect(() =>
        Uint200.from(
          '1606938044258990275541962092341162602522202993782792835301375'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint200.from('0x13')).toThrow()
      expect(() => Uint200.from('13')).not.toThrow()
    })
    test('can be converted to Bytes25', () => {
      expect(
        Uint200.from(
          '24519928653854221733733552434404946937899825954937634815'
        ).toBytes()
      ).toBeInstanceOf(Bytes25)
    })
  })

  describe('Uint208', () => {
    test('only accepts string under 1 << 208', () => {
      expect(() =>
        Uint208.from(
          '411376139330301510538742295639337626245683966408394965837152256'
        )
      ).toThrow()
      expect(() =>
        Uint208.from(
          '411376139330301510538742295639337626245683966408394965837152255'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint208.from('0x13')).toThrow()
      expect(() => Uint208.from('13')).not.toThrow()
    })
    test('can be converted to Bytes26', () => {
      expect(
        Uint208.from(
          '6277101735386680763835789423207666416102355444464034512895'
        ).toBytes()
      ).toBeInstanceOf(Bytes26)
    })
  })

  describe('Uint216', () => {
    test('only accepts string under 1 << 216', () => {
      expect(() =>
        Uint216.from(
          '105312291668557186697918027683670432318895095400549111254310977536'
        )
      ).toThrow()
      expect(() =>
        Uint216.from(
          '105312291668557186697918027683670432318895095400549111254310977535'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint216.from('0x13')).toThrow()
      expect(() => Uint216.from('13')).not.toThrow()
    })
    test('can be converted to Bytes27', () => {
      expect(
        Uint216.from(
          '1606938044258990275541962092341162602522202993782792835301375'
        ).toBytes()
      ).toBeInstanceOf(Bytes27)
    })
  })

  describe('Uint224', () => {
    test('only accepts string under 1 << 224', () => {
      expect(() =>
        Uint224.from(
          '26959946667150639794667015087019630673637144422540572481103610249216'
        )
      ).toThrow()
      expect(() =>
        Uint224.from(
          '26959946667150639794667015087019630673637144422540572481103610249215'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint224.from('0x13')).toThrow()
      expect(() => Uint224.from('13')).not.toThrow()
    })
    test('can be converted to Bytes28', () => {
      expect(
        Uint224.from(
          '411376139330301510538742295639337626245683966408394965837152255'
        ).toBytes()
      ).toBeInstanceOf(Bytes28)
    })
  })

  describe('Uint232', () => {
    test('only accepts string under 1 << 232', () => {
      expect(() =>
        Uint232.from(
          '6901746346790563787434755862277025452451108972170386555162524223799296'
        )
      ).toThrow()
      expect(() =>
        Uint232.from(
          '6901746346790563787434755862277025452451108972170386555162524223799295'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint232.from('0x13')).toThrow()
      expect(() => Uint232.from('13')).not.toThrow()
    })
    test('can be converted to Bytes29', () => {
      expect(
        Uint232.from(
          '105312291668557186697918027683670432318895095400549111254310977535'
        ).toBytes()
      ).toBeInstanceOf(Bytes29)
    })
  })

  describe('Uint240', () => {
    test('only accepts string under 1 << 240', () => {
      expect(() =>
        Uint240.from(
          '1766847064778384329583297500742918515827483896875618958121606201292619776'
        )
      ).toThrow()
      expect(() =>
        Uint240.from(
          '1766847064778384329583297500742918515827483896875618958121606201292619775'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint240.from('0x13')).toThrow()
      expect(() => Uint240.from('13')).not.toThrow()
    })
    test('can be converted to Bytes30', () => {
      expect(
        Uint240.from(
          '26959946667150639794667015087019630673637144422540572481103610249215'
        ).toBytes()
      ).toBeInstanceOf(Bytes30)
    })
  })

  describe('Uint248', () => {
    test('only accepts string under 1 << 248', () => {
      expect(() =>
        Uint248.from(
          '452312848583266388373324160190187140051835877600158453279131187530910662656'
        )
      ).toThrow()
      expect(() =>
        Uint248.from(
          '452312848583266388373324160190187140051835877600158453279131187530910662655'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint248.from('0x13')).toThrow()
      expect(() => Uint248.from('13')).not.toThrow()
    })
    test('can be converted to Bytes31', () => {
      expect(
        Uint248.from(
          '6901746346790563787434755862277025452451108972170386555162524223799295'
        ).toBytes()
      ).toBeInstanceOf(Bytes31)
    })
  })

  describe('Uint256', () => {
    test('only accepts string under 1 << 256', () => {
      expect(() =>
        Uint256.from(
          '115792089237316195423570985008687907853269984665640564039457584007913129639936'
        )
      ).toThrow()
      expect(() =>
        Uint256.from(
          '115792089237316195423570985008687907853269984665640564039457584007913129639935'
        )
      ).not.toThrow()
    })
    test('only accepts non-0x string', () => {
      expect(() => Uint256.from('0x13')).toThrow()
      expect(() => Uint256.from('13')).not.toThrow()
    })
    test('can be converted to Bytes32', () => {
      expect(
        Uint256.from(
          '1766847064778384329583297500742918515827483896875618958121606201292619775'
        ).toBytes()
      ).toBeInstanceOf(Bytes32)
    })
  })
})

describe('Address', () => {
  test('Convert string to EIP-55 checksum string', () => {
    expect(
      Address.from('0xab12cd12ef12ab12121212121212121212121212').toString()
    ).toStrictEqual('0xAB12cD12Ef12aB12121212121212121212121212')
  })
  test('does not accept non-0x string', () => {
    expect(() =>
      Bytes20.from('1212121212121212121212121212121212121212').toUint()
    ).toThrow()
  })
})
