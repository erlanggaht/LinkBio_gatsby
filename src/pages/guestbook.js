import * as React from "react";
import "../guestbook.css";
import { firestore } from "../config/firebase";
import { collection, doc,getDocs,limit,setDoc } from "firebase/firestore";
import {v4 as uuidv4} from 'uuid'
import jwtDecode from "jwt-decode";
import { navigate } from "gatsby";
import LoadingPage from "../Loading/Loading_Page";
import nookies, { parseCookies, setCookie } from 'nookies'

function getStorage_userEmail () {

  if(typeof window !== 'undefined') {
    if(!localStorage.getItem('u_s_n') ||  !localStorage.getItem('tok')) return false
    const userStorage = JSON.parse(localStorage.getItem('u_s_n') ).split('__')[1] 
    const aksestok = JSON.parse(localStorage.getItem('tok'))
    const decoded = jwtDecode(aksestok)
    
    return {userStorage,decoded}
  }

}

export default function Guestbook() {
  const [isi, setIsi] = React.useState("");
  const [data,setData] = React.useState([])
  const [loginVerif,setLoginVerif] = React.useState(false)
  const [loading,setLoading] = React.useState(false)
  const [limitComment,setLimitComment] = React.useState(typeof window !== 'undefined' ? localStorage.getItem('count') || 0 : 0)
  const [activeAdd,setActiveAdd] = React.useState(false)
  const storage_data = getStorage_userEmail()


  function githubLogin () {
    const token_cookies = parseCookies().token
    console.log(token_cookies)
    if(token_cookies){
      const jwt_Github = jwtDecode(token_cookies)
      if(jwt_Github){
        setActiveAdd(true)
        setLoginVerif(true)
      }
    }

  }
  
  //Saat Sudah Login
  React.useEffect(()=>{
    githubLogin()
    if(storage_data){
      if(storage_data.userStorage === storage_data.decoded.email ) setLoginVerif(true)
    }
  },[])


  // Method Komentar
  function addComment(e) {
    const email_to_name = storage_data.userStorage.split('@')[0]
    e.preventDefault();
    const guestbook = doc(firestore, 'guestbook',Date.now().toString());
    setDoc(guestbook,{
      _uuid : uuidv4(),
      nama : email_to_name,
      tahun_post : new Date().getFullYear().toString(),
      isi : isi
    }).then(()=>{
      console.log('thanks bro...')
      get_dbs().then(res => {
        setData(res)
        limitAdd()
       })
    }).catch(err=>{
      console.log(err)
    })

}

  //Ambil Data API firebase
    async function get_dbs() {
      let arr_data = []
      let guestbook = await collection(firestore,'guestbook')
      await getDocs(guestbook)
      .then(res=>{
        res.forEach((e) =>{
          arr_data.push(e.data())
        })
      })
      .catch(err => {
        console.log(err)
      })
     return arr_data
    }


    //UseEffect 
    React.useEffect(() => {
      limitAdd()
      get_dbs().then(res => {
       setData(res)
      })
     },[])

    //Method Limit Komentar
    function limitAdd () {
      setLimitComment(1 + limitComment)
      localStorage.setItem('count',limitComment)
      setCookie(null,'lmt',`${uuidv4()}_____${localStorage.getItem('count')}_____${uuidv4()}`,{
        maxAge : 8600,
        })
  
    const limit_cookie = parseCookies()
    const getNumberLimit_cookie =  limit_cookie.lmt.split('_____')[1]

      if(storage_data){
        if(storage_data.userStorage || storage_data.decoded.email)
          if(getNumberLimit_cookie >= 3) {
             setActiveAdd(true)
          }
      }
    }


    //M<ethod Logout
    function logout (){
       localStorage.removeItem('tok')
       localStorage.removeItem('u_s_n')
       localStorage.removeItem('count')
       nookies.destroy('lmt')
       setLoginVerif(false)
    }


  return (
    <>
    <title>Guestbook</title>
    <div className="layout_guestbook">
      <h1 className="title_guestbook">Guestbook</h1>
      <form onSubmit={(e) => addComment(e)} className="forms_guest">
        {loginVerif ? 
        <div>
        <input
          type="text"
          autoComplete="false"
          onChange={(e) => setIsi(e.target.value)}
          maxLength={100}
          minLength={2}
          className="input_addComment"
        />
        <button type="submit" 
        className={`btn_login3 ${activeAdd ? 'btn_disabled' : ""}`} 
        disabled={activeAdd  ? true : false}>Add
        </button>
       {activeAdd && <p style={{color:'#777',margin:"0.3rem .1rem"}}> 

Limited to 3 comments wait 24 hours : ) </p> }
        </div> : <p>sign up and log in for comments</p>}
        <div>
    
    { loginVerif ? 
      
      <>
        <p
        className="btn_login"
        onClick={() =>
         logout()
        }
      >
        Logout
      </p> 
      </> :
      <div style={{display:'flex'}}>
        <p
        className="btn_login"
        onClick={() =>
          navigate('/register')
        }
      > 
        Signup
      </p>
      <p
        className="btn_login"
        onClick={() =>
        navigate('/login')
        }
      >
        Login
      </p>
      </div> }
        </div>
      </form>
      {loading ? <p>Loading ...</p> : 
      <div className="guest_content">
       {data ? data.map((m,i) => {
         return <div className="area_guest" key={i}>
          <span className="name_guest">{m.nama} : </span>{" "}
          <span className="comment_guest">
            {m.isi} ~ {m.tahun_post}{" "}
          </span>
        </div> 
       }) : ""}
      </div> }
    </div> 
    
    </>
  );
}
