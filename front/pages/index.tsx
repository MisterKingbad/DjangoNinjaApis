import { LivroService } from "@/src/services/livros/LivroService";
import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import UpdateIcon from '@mui/icons-material/Update';
import { useRouter } from "next/router";



export default function Home() {
  const Livro = LivroService()
  const router = useRouter() 
  const [livros, setLivros] = useState<any>()

  useEffect(() => {
    (
      async () => {
        const res = await Livro.getLivros()
        console.log(res)
        setLivros(res)
      }

    )();
  }, [])

  const criarLivroPage = () => {
    router.push('criacao/novo-livro')
  }

  const atualizarLivroPage = (idU:any) => {
    const url = {
      pathname:'criacao/atualizar-livro',
      query: {
        idU
      }
    };
    router.replace(url, url.pathname, {shallow:true})
  }

  const removerLivro = async (id:any) => {
    await Livro.deletarLivroId(id)
  }

  return (
    <Box>
      <TableContainer> 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>#id</strong>
              </TableCell>
              <TableCell>
                <strong>Titulo</strong>
              </TableCell>
              <TableCell>
                <strong>Autor</strong>
              </TableCell>
              <TableCell>
                <Button color="success" variant="contained" onClick={() => criarLivroPage()}>New</Button>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {livros?.map((livro:any) => (
              <TableRow key={livro.id}>
                <TableCell>
                  {livro.id}
                </TableCell>
                <TableCell>
                  {livro.titulo}
                </TableCell>
                <TableCell>
                  {livro.autor}
                </TableCell>

                <TableCell>
                  <Tooltip title='Remover livro'>
                    <IconButton onClick={() => removerLivro(livro.id)}>
                      <RemoveCircleIcon color="error"/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title='Atualizar livro'>
                    <IconButton onClick={() => atualizarLivroPage(livro.id)}>
                      <UpdateIcon color="primary"/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow> 
            ))
              
            }
          </TableBody>
        </Table>
      </TableContainer>

    </Box>
  )
}
