# find-free-port-cli

This is CLI version of [find-free-port](https://www.npmjs.com/package/find-free-port) library.

## Installation

```
npm install -g find-free-port-cli
```

## Usage

```
free-port -p <port> [-s <stop> -h <host> -n <num>]
```

## Examples

Find a free port to listen on that is >= 3000

```
$ free-port -p 3000
```

Find a free port to listen on that is >= 3000 and < 3100

```
$ free-port -p 3000 -s 3100
```

Find 3 free ports to listen on that is >= 3000 locally

```
$ free-port -p 3000 -s 3100 -h 127.0.0.1 -n 3
> 3001 3002 3003
```

Find a free port that is >= 3000 and at host 192.168.100.1

```
$ free-port -p 3000 -h 192.168.100.1
> 3001 3002 3003
```
