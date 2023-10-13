const earlier = document.getElementById('earlier');
const after = document.getElementById('after');
earlier.innerHTML = "The word was webmaster";

function alpha(str) {
    var arr = str.split("");
    res = arr.sort().join("");
    rws = res.replace(/\s+/g, "");
    return rws;
  }
 
  after.innerHTML = "The word afterwards is "+alpha("webmaster");
