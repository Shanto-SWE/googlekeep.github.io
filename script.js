

    const addbtn=document.querySelector(".btn");
                
            const updatalocalData=()=>{

            const textAreadata=document.querySelectorAll('textarea');
            const notes= [];
            textAreadata.forEach((note)=>{
                return notes.push(note.value);
            })
             localStorage.setItem('notes',JSON.stringify(notes))
            }

    const shownote=(text = '')=>{

        
        const note=document.createElement("div");
        note.classList.add("note");
      
        const htmldata=`
        <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>

        </div>
        <div class="main ${text? "hidden" : ""}"></div>
       
        <textarea class="${text? "" : "hidden"}"></textarea> `;

        note.insertAdjacentHTML('afterbegin',htmldata);
       

        const deletebtn=note.querySelector(".delete")
        const editbtn=note.querySelector(".edit");
        const maindiv=note.querySelector(".main");
        const textArea=note.querySelector("textarea");


        deletebtn.addEventListener('click',()=>{
                 note.remove();
                 updatalocalData();
             })

             
             textArea.value=text;
             console.log(text)
             maindiv.innerHTML=text;

             editbtn.addEventListener('click',()=>{
                 maindiv.classList.toggle('hidden');
                 textArea.classList.toggle('hidden')
               

             })

         

             textArea.addEventListener('change',(event)=>{
                const value=event.target.value;
                maindiv.innerHTML=value;
               updatalocalData();

             })
            

        document.body.appendChild(note)

    }


    // back data from localStorage
   
   
  const notes=JSON.parse(localStorage.getItem('notes'));

  if(notes){
      notes.forEach((note)=>{
          return shownote(note);
      })
  }
    addbtn.addEventListener('click',shownote);

