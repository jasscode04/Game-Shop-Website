import React from 'react'
import './sideMenu.css';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';

function SideMenu({active,sectionActive}) {
  
  const[navData,setNavData]= React.useState(navListData);
  
  const handleNavOnClick=(id,target)=>{
    console.log(id);
    const newdNavData= navData.map(nav=>{
      nav.active= false;
      if(nav._id===id)
        nav.active= true;
        return nav;
});
    setNavData(newdNavData);
    sectionActive(target);
  }





  return (
    <div className={`sideMenu ${active ? 'active':undefined}`}>
        <a href="#" className="logo">
        <i class ="bi bi-controller"></i> 
         <span className="brand">Play</span>   
        </a>
        <ul className="nav">
          {navData.map(item=>(
            <NavListItem key={item._id} item={item}
             navOnClick={handleNavOnClick}
            />
          ))}
</ul>
<ul className='social'>
  <li>
    <a href="#" className='meta'>
      <i className='bi bi-meta'></i>
    </a>
  </li>
  <li>
     <a href="#" className='twitter'>
      <i className='bi bi-twitter-x'></i>
    </a>
  </li>
  <li>
     <a href="#" className='youtube'>
      <i className='bi bi-youtube'></i>
    </a>
  </li>
  <li>
     <a href="#" className='share'>
      <i className='bi bi-share'></i>
    </a>
  </li>
</ul>
        </div>
  );
}

export default SideMenu