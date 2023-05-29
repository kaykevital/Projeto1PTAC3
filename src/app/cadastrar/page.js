'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => { 
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
    
        <div className={styles.main}>

             
            <fieldset>
            <legend><b>FORMULARIO</b></legend>
                <form action='' onSubmit={cadastrar}>
                    <h2>
                    CADASTRAR
                    </h2>
                    <br/>
                    <center> 
                        <a className='informacoes'>Nome: </a> 
                        <input className='inputs' placeholder='Informe o nome' nome="nome" type="text"onChange={e => setNome(e.target.value)}></input>
                        <br/>

                        <a className='informacoes'>Curso: </a>
                        <input className='inputs' placeholder='Informe o curso' nome="curso" type="text" onChange={e => setCurso(e.target.value)}></input>
                        <br/>


                        <a className='informacoes'>Nº de inscrição: </a>
                        <input className='inputs' placeholder='Informe o nº de inscrição' nome="num_inscricao" type="number"onChange={e => setNum_inscricao(e.target.value)}></input>
                        <br/>
                        <br/>
                        <button type='submit' className='botao'>CADASTRAR</button>
                        <center><a href='/' className='voltar'>Voltar</a></center> 
                        <br/>
                    </center>
                </form>
            </fieldset>
        </div>

    );

}