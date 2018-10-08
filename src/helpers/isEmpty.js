export default function isEmpty(obj) {
  for(var key in obj) {
    console.log(key);
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}