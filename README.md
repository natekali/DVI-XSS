# DVI-XSS
Detector of Vulnerable Input - XSS Cross Site Scripting - Payload Automation - Exploit Vulnerable Input Field

## Context
I had an assignment for an internship in the company Quarkslab, with the help of Node.js and Puppeteer i had to develop a simple script detecting a browser popup (e.g. a valid XSS). So i went ahead and i make the DVI-XSS to improve my skills.

## Features
* **Exploit of vulnerable Input field**
* **Automation of XSS payload**
* **Server-side programming**

## Prerequisites
Before use the DVI-XSS, make sure you **install** all this elements : 
* [VSCode or an other IDE](https://code.visualstudio.com/)
* [NodeJS](https://nodejs.org/en)
* [Puppeteer](https://www.npmjs.com/package/puppeteer) -> details in the installation topic below

## Installation
Clone this repository to your local machine.

Open the DVI-XSS folder in VSCode.

In the VSCode terminal, you have to install the puppeteer package, type the following command :

```npm i puppeteer```

You can now play with the example.js file or configure your own index.js file the way you like - details below

## Configuration for personnal use - index.js 
So, it's pretty easy, you can use my pattern to choose your target website and your favorite payload.
All the information to change is indicate by the //BIG LETTER COMMENTS and have a name similar to their function in the script, you can't make a mistake.

* For the **input name** and the **type of button** use for submit, you have to go ahead and search for it directly on your website, like this example : 
<img width="1491" alt="inspect" src="https://user-images.githubusercontent.com/117448792/228720857-56263c5d-948a-4569-93c1-73e1f80d7c7d.png">

   You can now replace the value 'X' on the line 25, 26, 31, 32, 37 and 38.

* For the url of you're website, you have to find a **potentially vulnerable website**, i personnaly choose for the example.js file a common XSS vulnerable website just for the example.

* For the **payloads**, you can find them on the [Big List of Payload](https://github.com/payloadbox/xss-payload-list).

Don't forget to add the meaning of your payloads in the line 11 of the script, it can be helpful for the understanding of your output :

```console.log('1 : <first_payload_type XSS> | 2 : <second_payload_type XSS> | 3 : <third_payload_type XSS>');```
