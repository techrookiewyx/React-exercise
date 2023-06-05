function Part({ title, children }) {
  return (
    <div className="card229">
      <div className='card-content229'>
        <h1 className="h1229">{title}</h1>
        {children}
      </div>
    </div>
  )
}
export default function ChildrenTransCode() { 
  return (
    <div>
       <Part title="Photo">
       <img
            className="avatar229"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
      </Part>
      <Part title="Photo">
      <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Part>
   </div>
  )
}