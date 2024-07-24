/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TestToken,
  TestTokenInterface,
} from "../../../contracts/Token.sol/TestToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burn1000tokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint1000tokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600e81526020017f504545502054697020546f6b656e0000000000000000000000000000000000008152506040518060400160405280600481526020017f504545500000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000324565b508060049081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b610fad806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806370a082311161007157806370a08231146101685780637a7adac91461019857806395d89b41146101a2578063a9059cbb146101c0578063ccc87363146101f0578063dd62ed3e146101fa576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b661022a565b6040516100c39190610c01565b60405180910390f35b6100e660048036038101906100e19190610cbc565b6102bc565b6040516100f39190610d17565b60405180910390f35b6101046102df565b6040516101119190610d41565b60405180910390f35b610134600480360381019061012f9190610d5c565b6102e9565b6040516101419190610d17565b60405180910390f35b610152610318565b60405161015f9190610dcb565b60405180910390f35b610182600480360381019061017d9190610de6565b610321565b60405161018f9190610d41565b60405180910390f35b6101a0610369565b005b6101aa61037e565b6040516101b79190610c01565b60405180910390f35b6101da60048036038101906101d59190610cbc565b610410565b6040516101e79190610d17565b60405180910390f35b6101f8610433565b005b610214600480360381019061020f9190610e13565b610448565b6040516102219190610d41565b60405180910390f35b60606003805461023990610e82565b80601f016020809104026020016040519081016040528092919081815260200182805461026590610e82565b80156102b25780601f10610287576101008083540402835291602001916102b2565b820191906000526020600020905b81548152906001019060200180831161029557829003601f168201915b5050505050905090565b6000806102c76104cf565b90506102d48185856104d7565b600191505092915050565b6000600254905090565b6000806102f46104cf565b90506103018582856104e9565b61030c85858561057d565b60019150509392505050565b60006012905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61037c33683635c9adc5dea00000610671565b565b60606004805461038d90610e82565b80601f01602080910402602001604051908101604052809291908181526020018280546103b990610e82565b80156104065780601f106103db57610100808354040283529160200191610406565b820191906000526020600020905b8154815290600101906020018083116103e957829003601f168201915b5050505050905090565b60008061041b6104cf565b905061042881858561057d565b600191505092915050565b61044633683635c9adc5dea000006106f3565b565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6104e48383836001610775565b505050565b60006104f58484610448565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105775781811015610567578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161055e93929190610ec2565b60405180910390fd5b61057684848484036000610775565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105ef5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105e69190610ef9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106615760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106589190610ef9565b60405180910390fd5b61066c83838361094c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106e35760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106da9190610ef9565b60405180910390fd5b6106ef8260008361094c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107655760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161075c9190610ef9565b60405180910390fd5b6107716000838361094c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036107e75760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016107de9190610ef9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108595760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016108509190610ef9565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610946578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161093d9190610d41565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361099e5780600260008282546109929190610f43565b92505081905550610a71565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a2a578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610a2193929190610ec2565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aba5780600260008282540392505081905550610b07565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b649190610d41565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610bab578082015181840152602081019050610b90565b60008484015250505050565b6000601f19601f8301169050919050565b6000610bd382610b71565b610bdd8185610b7c565b9350610bed818560208601610b8d565b610bf681610bb7565b840191505092915050565b60006020820190508181036000830152610c1b8184610bc8565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c5382610c28565b9050919050565b610c6381610c48565b8114610c6e57600080fd5b50565b600081359050610c8081610c5a565b92915050565b6000819050919050565b610c9981610c86565b8114610ca457600080fd5b50565b600081359050610cb681610c90565b92915050565b60008060408385031215610cd357610cd2610c23565b5b6000610ce185828601610c71565b9250506020610cf285828601610ca7565b9150509250929050565b60008115159050919050565b610d1181610cfc565b82525050565b6000602082019050610d2c6000830184610d08565b92915050565b610d3b81610c86565b82525050565b6000602082019050610d566000830184610d32565b92915050565b600080600060608486031215610d7557610d74610c23565b5b6000610d8386828701610c71565b9350506020610d9486828701610c71565b9250506040610da586828701610ca7565b9150509250925092565b600060ff82169050919050565b610dc581610daf565b82525050565b6000602082019050610de06000830184610dbc565b92915050565b600060208284031215610dfc57610dfb610c23565b5b6000610e0a84828501610c71565b91505092915050565b60008060408385031215610e2a57610e29610c23565b5b6000610e3885828601610c71565b9250506020610e4985828601610c71565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e9a57607f821691505b602082108103610ead57610eac610e53565b5b50919050565b610ebc81610c48565b82525050565b6000606082019050610ed76000830186610eb3565b610ee46020830185610d32565b610ef16040830184610d32565b949350505050565b6000602082019050610f0e6000830184610eb3565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f4e82610c86565b9150610f5983610c86565b9250828201905080821115610f7157610f70610f14565b5b9291505056fea2646970667358221220e5eed2c3949c11b1d4f568d52aa16cc94b74e827f2eac9c8a43331f5f63823e164736f6c63430008140033";

type TestTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestToken__factory extends ContractFactory {
  constructor(...args: TestTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TestToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestToken__factory {
    return super.connect(runner) as TestToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new Interface(_abi) as TestTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestToken {
    return new Contract(address, _abi, runner) as unknown as TestToken;
  }
}
