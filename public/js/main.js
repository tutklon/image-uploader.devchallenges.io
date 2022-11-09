const reader = new FileReader()
document.addEventListener('alpine:init' , () => {
  Alpine.data('modal' , () => ({
    file: false,
    selectImage(){
      reader.readAsDataURL(document.getElementById('image').files[0])
      reader.onload = () => {
        this.file = reader.result
      }
    }
  }))
})
upload.addEventListener('change' , (e) => {
  reader.readAsDataURL(e.files[0])
  reader.onload = () => {

  }
})

console.log(upload.getAttribute('name'))