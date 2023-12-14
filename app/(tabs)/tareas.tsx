import { AntDesign } from "@expo/vector-icons"
import { Button, ButtonText, Input, InputField, Text } from "@gluestack-ui/themed"
import { Box } from "@gluestack-ui/themed"
import { useState } from "react"
import { FlatList, TouchableOpacity } from "react-native"

const listaTareasPrecargadas = [
    { titulo: 'Tarea1', descripcion: 'descr 1' },
    { titulo: 'Tarea2', descripcion: 'descr 2' },
    { titulo: 'Tarea3', descripcion: 'descr 3' },
    { titulo: 'Tarea4', descripcion: 'descr 4' },
    { titulo: 'Tarea5', descripcion: 'descr 5' },
]

export default function tareas() {
    const [listaTareas, setListaTareas] = useState(listaTareasPrecargadas)
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    function handleAgregarTarea() {
        //Agregar tarea
        // listaTareas = listaTareas + nuevaTarea
        const tarea = {
            titulo: titulo,
            descripcion: descripcion
        }
        setListaTareas([...listaTareas, tarea])
    }

    function handleEliminarTarea(tareaSeleccionada:number) {
        //eliminar tareas
        //listaTareas = listaTareas - tareaSeleccionada
        console.log('tareaSeleccionada: ',tareaSeleccionada)
        //como filtro de todas las tareas, las que no son tareaSeleccionada
        // let arrayAuxiliar=[]
        // for (let index = 0; index < listaTareas.length; index++) {
        //     const element = listaTareas[index];
        //     console.log('elemento recorrido '+JSON.stringify(element))
        //     if(index !== tareaSeleccionada){
        //          arrayAuxiliar = [...arrayAuxiliar, element]       
        //     }
        // }

        const tareasFiltradas = listaTareas.filter((tarea,index)=>index !== tareaSeleccionada)
        console.log('tareasfiltradas: ',JSON.stringify(tareasFiltradas))
        setListaTareas(tareasFiltradas)

        // console.log('arrayAuxiliar: ',JSON.stringify(arrayAuxiliar))
        // setListaTareas(arrayAuxiliar)
    }

    return (
        <Box p={10} bgColor={'$white'} flex={1}>
            <Text>{titulo}</Text>
            <Text bold>Titulo</Text>
            <Input>
                <InputField placeholder="Ingrese el titulo" value={titulo} onChangeText={setTitulo} />
            </Input>

            <Text bold mt={20}>Descripción</Text>
            <Input>
                <InputField placeholder="Ingrese la descripción" value={descripcion} onChangeText={setDescripcion} />
            </Input>

            <Button mt={20} backgroundColor="$black" onPress={handleAgregarTarea}>
                <ButtonText textTransform="uppercase">Agregar</ButtonText>
            </Button>



            <Text bold mt={20}>Lista de tareas</Text>
            <FlatList
                data={listaTareas}
                renderItem={({ item, index }) => (
                    <Box flexDirection="row" style={{ alignItems: 'center' }}>
                        <TouchableOpacity 
                        style={{ backgroundColor: '#f2f2f2', padding: 8, width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}
                        onPress={()=>{
                            handleEliminarTarea(index)
                        }}
                        >
                            <AntDesign name="delete" size={18} color="black" />
                        </TouchableOpacity>
                        <Text mx={10} >{index + 1}</Text>
                        <Box >
                            <Box flexDirection="row">
                                <Text bold>Titulo: </Text>
                                <Text>{item.titulo}</Text>

                            </Box>
                            <Box flexDirection="row">
                                <Text bold>Descripcion: </Text>
                                <Text>{item.descripcion}</Text>
                            </Box>
                        </Box>
                    </Box>
                )}
            />
        </Box>
    )
}