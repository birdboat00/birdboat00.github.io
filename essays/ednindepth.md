# eden InDepth
<p class="author">bb00 <br> June 13, 2022</p>

<div class="abstract">
  <h2>Abstract</h2>
  <p>eden is a minimalist bytecode virtual machine. It is used to develop reliable applications.</p>
  <p>eden is inspired by the Erlang BEAM virtual machine and the Haxe HashLink virtual machine. It features a strictly-typed register-based bytecode.</p>
</div>

## Contents
1. [eden bytecode](#eden-bytecode)
1. [eden data types](#eden-data-types)
1. [list of opcodes](#list-of-opcodes)
1. [pack file format](#pack-file-format)

## eden bytecode
Lets have a look at the bytecode used for eden.

You might wonder what a bytecode actually is.

Bytecode is similar to some assembler languages except it's not related to any specific CPU. It is an assembler language created for this specific virtual machine. This "eden assembler" can also be translated to real assembler that runs on directly on the CPU, that's what we call just-in-time compilation. Eden doesn't do JIT compilation yet but it is planned for the future.

If you want to look at eden bytecode output, try passing the `--dumptestpack` flag to the eden virtual machine. This dumps the builtin test pack to a file.

Packs are the "executables" of the eden virtual machine. They contain all the data and code that your application needs to run and some information about it.

Dumping will output the following file:
```
# dump.txt
pack
  name->edn_bitp
  bytecodeversion-> 1
  entryfn-> 0
tables:
ints (3)
  @0 -> 10
  @1 -> 20
  @2 -> 40
floats (3)
  @0 -> -1.2
  @1 -> 1
  @2 -> 10.23
strings (4)
  @0 -> "alpha"
  @1 -> "beta"
  @2 -> "gamma"
  @3 -> "
"
functions (2)
  @0 -> (24) {
    lstr r(0) <- t(str, 0)
    lstr r(1) <- t(str, 1)
    lstr r(2) <- t(str, 2)
    call<1> t(fns, 1)
    move r(0) <- r(1)
    call<1> t(fns, 1)
    move r(0) <- r(2)
    call<1> t(fns, 1)
  }
  @1 -> (12) {
    bifcall<2> $1 r0
    lstr r(4) <- t(str, 3)
    bifcall<2> $1 r4
    ret
  }
```

As you can see a pack file is composed of several sections:
- the header
- the tables for integers, floats, strings
- the table for functions

### The Integers, Floats and Strings tables
These tables hold all the integers, floats and strings contained in the packs bytecode. Every constant is only stored once and always reffered to by an index into one of those tables.

### The Functions table
This is where your eden code is stored. Each function in your code creates and entry into the function table.

For instance, the following entry represents the putStrLn function:
```
@1 -> (12)
```

- @1 is the index of the function in the table
- (12) is the number length of bytecode values in the function

### Deciphering the bytecode
If we take another look a the `putStrLn` function, we can see the following bytecode.

```
@1 -> (12) {
  bifcall<2> $1 r0
  lstr r(4) <- t(str, 3)
  bifcall<2> $1 r4
  ret
}
```

The bytecode consists of a list of opcodes. Each opcode performs a single instruction.

Let's start deciphering the bytecode!

`bifcall<2> $1 r0`
This calls a builtin function with the id of `1`. The instruction `bifcall` is a variable length instruction, which means it can be followed by a variable length of other bytecode values for arguments. This is denothed inside the `<2>`, which means the opcode is followed by 2 other bytecode values. The first one is the id of the builtin function, the second one is the register denothed by `r0`, that the builtin function uses as it's first argument.

The builtin function with the id 1 is the `printreg` function. As our register r0 holds a string, it prints a string to the console!

`lstr r(4) <- t(str, 3)`
This will store the string at index 3 of the strings table into the register 4. The string is a newline charachter.

`bifcall<2> $1 r4`
This will once again print the content of register r4 to the console. Which is a newline character.

`ret`
This returns from the current function.

## eden data types
> Section is WIP
Eden's values are stored in what's called a term.

## list of opcodes
### move (0) dest src
This opcodes copies the content of the src register into the dest register.
### lint (1) dest idx
This opcode loads the integer from the integer table at index idx into the dest register.
### lflt (2) dest idx
This opcode loads the float from the float table at index idx into the dest register.
### lstr (3) dest idx
This opcode loads the string from the string table at index idx into the dest register.
### call (9) arity fnid <args>
This opcode calls the function from the function table at index fnid with a number of `arity - 2` args following after the fnid parameter. The args are always registers. Pushes the current function onto the callstack.
### tailcall (10) arity fnid <args>
This opcode does the same as the [call](#call-9-arity-fnid-args) opcode but does a recursive tailcall. So it doesn't push a new callstack entry to the callstack.
### bifcall (11) arity bifid <args>
This opcode calls a builtin function with the id `bifid` and a number of `arity - 2` arguments, which are registers.
### ret (12)
Returns from the current function and pops it from the callstack.

## pack file format
> Section is WIP