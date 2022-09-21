function getObj(obj, address0) {
    let childObj = obj
    let parentObj = obj
    let temp
    let address = address0
    address = address.includes('/record/') ? address.substr(8) : address
  
    for (var i = 0; i < address.length; i++) {
      if (address[i]!='-') {
        temp = obj.children.find((e)=>e.id==address[i])
        obj = temp
        if (i == address.length - 1) childObj = obj
        else if (i == address.length - 3) parentObj = obj
      }
    }
    console.log(childObj)
    return {childObj : childObj, parentObj : parentObj}
  }
  
export {getObj}