import { LivroService } from "@/src/services/livros/LivroService";
import { Box, Button, Card, Container, Divider, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AtualizarLivro () {
  
  const Livro = LivroService()
  const router = useRouter()
  const idU = router.query.idU ? router.query.idU : ''
  const [form, setForm] = useState({
    titulo: null || '',
    descricao: null || '',
    autor: null || ''
  })

  useEffect (() => {
    obterLivroId(idU)
  }, [])

  const obterLivroId = async (id:any) => {
    const res = await Livro.getLivroId(id)
    setForm({
      ...form,
      titulo: res.titulo,
      descricao: res.descricao,
      autor: res.autor
    })
  }

  const atualizarLivro = async () => {
    await Livro.atualizarLivroId(idU, form)
    router.push('/')
  }


  return (
    <Container maxWidth='lg'> 
      <Card 
        sx={{
          mt: 3,
          px: 4,
          pt: 5,
          pb: 3
        }}
      >
        <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}> 
          Atualizar Livro
        </Typography>
        <Divider/>
        <Box p={2}>
          <Grid>
            <FormControl sx={{ m: 1 }} fullWidth>
              <TextField type="text" label="Titulo" variant="outlined" placeholder="Titulo" size="small" InputLabelProps={{
                style: { fontWeight: 'bold' },
              }} value={form.titulo} onChange={(e) => setForm({...form, titulo: e.target.value})}/>
            </FormControl>
            <FormControl sx={{ m: 1 }} fullWidth>
              <TextField type="text" label="Descricao" variant="outlined" placeholder="Descricao" size="small" InputLabelProps={{
                style: { fontWeight: 'bold' },
              }} value={form.descricao} onChange={(e) => setForm({...form, descricao: e.target.value})}/>
            </FormControl>
            <FormControl sx={{ m: 1 }} fullWidth>
              <TextField type="text" label="Autor" variant="outlined" placeholder="Autor" size="small" InputLabelProps={{
                style: { fontWeight: 'bold' },
              }} value={form.autor} onChange={(e) => setForm({...form, autor: e.target.value})}/>
            </FormControl>
            
          </Grid>
        </Box>
        <Box alignItems="center"
          display={{ xs: 'block', md: 'flex' }}
          justifyContent="space-between"
          sx={{m: 1,}}
        >
          <Box display={{ xs: 'block', md: 'flex' }}>
          </Box>
          <Button variant="contained" color="primary" onClick={atualizarLivro}>Atualizar</Button>
        </Box>
      </Card>
    </Container>
  )
}