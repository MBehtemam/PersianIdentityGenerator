#Persian Identity Generator
with this node package you can generate fake identity and information 

##Options
with option you can control how PIG generate identites.

###count (Require)
count determine number of files,
EX:create 10 fake information
```bash 
node index --count 10
```
###male (Optional)
with male option you can create male first name 

```bash
node index --male --count 5
```

###output (Optional)
with output option you can control output's of file.currenty PIG support `JSON` and `Excel` files. the default value is `json`.
####excel output
for getting excel file from fake identity that generated you can use output like this

```bash
node index --male --count 4 --output excel
```
####json output
and for json you can use like this:

```bash
node index --male --age --count 50 --output json
```

###age
for adding age you can use `--age` argument.currently it generate random number between 1 to 99 and dosen't support min and max age.

```bash
node index --male --age --count 10 
```
