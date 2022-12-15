# Introduction
![picture 1](level1/image-demo.png)  

## smaller tilte
### smaller title
#### smaller title
##### smaller title
###### smaller title

```python
name = input()
print(f"hello {name}")
```

40527 | <font size="-1">INVALID_RUN_STATE </font><br/>

## comment
[This is hidden by using #]: #
<!-- this is html  comment -->

## new lines
this 
is 
all 
one
line

<!-- you can using two spaces or a tab at the end of line to make it seprate -->
this    
is  
seperate    

## blod and italics
You can make *italic*.  
make **blod**.  
make both ***italic with bold***

## link
check the site with [this is a link](https://ssss.com)

## image
show a image ![alter text](level1/image-demo.png)

## list
1. this
1. is 
1. a order list


- unorder 
- list

>block quote -- spacial note

#### Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being deleted. 
deleteCriteria | The delete criteria to be applied. 

export var sss = 1;

<>{sss}</>

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !