import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import 'animate.css';
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/auth/thunks";


export const NoteView = () => {

  const dispatch = useDispatch();

  const { active: curso } = useSelector(state => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(curso)

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState])

const onSaveNote = () => {
  dispatch(startSaveNote());
}

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ mb: 1 }} className="animate__animated animate__fadeIn animate__faster">

      <Grid item>
        <Typography fontSize={39} fontWeight='light' sx={{ ml: 30 }}> </Typography>
      </Grid>

      <Grid item>
        <Typography component={'span'}><h1>{title}</h1></Typography>
      </Grid>

      <Grid item>

        <Button onClick={onSaveNote} color='primary' sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>

      </Grid>

      <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ mb: 1 }}>
        <TextField
          type='text'
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label='Titulo'
          sx={{ border: 'none', mb: 1, ml: 30, mr: 10 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type='text'
          variant="filled"
          fullWidth
          multiline
          placeholder="Ingrese un titulo"
          label='Cuerpo del curso'
          sx={{ border: 'none', mb: 1, ml: 30, mr: 10 }}
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />



      </Grid>

      <ImageGallery />


    </Grid>
  )
}