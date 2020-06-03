# Solidity Types in Typescript

This library types Ethereum strings strictly using Solidity types. With this library, you can explicitly prevent to convert uint256 types to address or bytes20.

```shell
yarn add soltypes
```

## Examples

```typescript
import { Bytes32, Uint256, Uint32, Address } from 'soltypes'

> new Bytes32('0x1111111111111111111111111111111111111111111111111111111111111111')
// OK

> Bytes32.from('0x1111111111111111111111111111111111111111111111111111111111111111')
// OK

> Bytes32.from('1111111111111111111111111111111111111111111111111111111111111111')
// ERROR - does not start with 0x

> Bytes32.from('0x111111111111111')
// ERROR - bytes length is not 32

> const hash = new Bytes32('0x1111111111111111111111111111111111111111111111111111111111111111')

> hash.toString()
'0x1111111111111111111111111111111111111111111111111111111111111111'
// returns 0x string

> const n: Uint256 = hash.toUint()
> n.toString()
'7719472615821079694904732333912527190217998977709370935963838933860875309329'
// returns Uint256 instance

> Uint32.from('11111')
// OK

> Uint32.from('0x1111111')
// ERROR - should not start with 0x

> Uint32.from('111111111111111111111111')
// ERROR - overflow

> const uintA = Uint256('1234')

> const b: Bytes32 = uintA.toBytes()
> b.toString()
'0x00000000000000000000000000000000000000000000000000000000000004d2'
// returns 0x string

> Address.from('0x1234343434343434343434343434343434343434')
// OK

> Address.from('0xabcd1234')
// FAILs
```
