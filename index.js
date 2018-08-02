var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(array){
  kittens.push("Ralph")
  return array
}

function destructivelyPrependKitten(array){
  kittens.unshift("Bob")
  return array
}

function destructivelyRemoveLastKitten(array){
  kittens.pop()
  return array
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift()
  return array
}

function  appendKitten(array){
  kittens.slice()
  return 
}