// const connect = require('../../../db/connect');
var express = require('express');
md5 = require('js-md5');
var fs = require('fs');

const imageAdd = data => {
  const b64string = data.body.image.image.split(',')[1];
  const buffer = Buffer.from(b64string, 'base64');
  const extension = data.body.image.type.split('/')[1];
  let newName =
    md5(
      Math.random()
        .toString(36)
        .substring(2, 15),
    ) +
    '.' +
    extension;
  fs.writeFileSync(`uploads/${newName}`, buffer);
};

module.exports = imageAdd;
