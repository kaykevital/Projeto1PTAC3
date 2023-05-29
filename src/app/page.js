"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    } 
  }
  return (
    <main>

      <br/>

     <center> <Link className='link' href="/cadastrar"><b>CADASTRAR</b></Link> </center>
      {alunos.map(aluno => (
        <div className='card' key={aluno.id}> 
        
          <p className='itens' ><b>{aluno.nome}</b></p> 
      
          <p className='itens' ><b>{aluno.curso}</b></p>
        
          <p className='itens'><b>{aluno.num_inscricao}</b></p>
        
         <center> <button onClick={e => e.preventDefault(remover(aluno.id))}>REMOVER</button> </center>
        </div>
      ))}
    </main>
  )
}