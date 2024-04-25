// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: April 5 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculatePermeterAndAreaOfRectangle() {
  // input
  const baseOfTriangle = parseInt(document.getElementById('length-of-rectangle').value)
  const heightOfTriangle = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const areaOfTriangle = baseOfTriangle + heightOfTriangle + 0
  const HeightOfTriangle = (baseOfTriangle + heightOfTriangle) + 0
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' mm²'
  document.getElementById('perimeter').innerHTML = 'Area is:  ' + perimeterOfRectangle + 'mm²'
}
