# ef - ensure file
Command line utility to merge the functionality of "mkdir -p" and "touch". Based
on node-fs-extra ensureFile method.

## Installation
Install with npm.
```shell
npm install -g https://github.com/lucentminds/ef.git
```
You should now have a global shell command called `ef`.

## Usage
```shell
ef /project/public/index.html
```
The directory path and file are created even if the directory path `/project/public` didn't exist before.
