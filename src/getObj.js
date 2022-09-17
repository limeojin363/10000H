function getObj(obj, address0) {
    let childObj = obj
    let parentObj = obj
    let temp
    let address = address0
    address = address.includes('/content/') ? address.substr(9) : address
  
  
    for (var i = 0; i < address.length; i++) {
      if (address[i]!='-') {
        temp = obj.children.find((e)=>e.id==address[i])
        obj = temp
        if (i == address.length - 1) childObj = obj
        else if (i == address.length - 3) parentObj = obj
      }
    }
    return {childObj : childObj, parentObj : parentObj}
  }
  
export {getObj}