//Lorsque on veut créer un component on importe React
import React, { useState } from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from '../components/Button';


//On simule un modéle de donée (tableau de list)
const lists = [
    {
        title: 'Liste 1',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    },
    {
        title: 'Liste 2',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    },
    {
        title: 'Liste 3',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    }
]

//onj déclare un template d'une list
const defaultList = {
    title: 'Nouvelle liste',
    items: [
        {
            title: 'item1',
        },
        {
            title: 'item2',
        },
        {
            title: 'item3',
        },
    ]
}

// on déclare un componet sous forme d'arrow funtion 
const App = () => {
    // on utilise un hooks d'état pour pouvoir moifier la page
    // const [maVariable d'état, mon Setter de la variable] = useState(ma valeur initial)
    const [myLists, setMyList] = useState(lists)


    //on crée une fonction pour ajouter un élément à la liste
    const addList = () => {

        //on pousse un nouvelle élément dans le tableau de liste
        myLists.push(defaultList)

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }

    //on crée une fonction pour enlever un élément à la liste
    const removeList = () => {

        //on enléve le dernier élément du tableau de list
        myLists.pop()

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }
    //zergrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrgrg
    return (
        <div className='layout'>
            {
<<<<<<< HEAD
                myLists.map(({ items, title }) =>
                    <List title={title}>
                        {
=======
                // On utilise la méthode .map pour parcourir les éléments,
                // de nos tableau et renvoyer pour chaque élément le component indiquée
                myLists.map(({ items, title }) =>
                    // On affiche nos lists une a une sous forme de component
                    <List title={title}  >
                        {
                            // On affiche les items d'une liste une à une sous forme de component
>>>>>>> 7f9cf2a7268cd42ec1609f2b810e6fed6904dcb5
                            items.map(({ title: itemTitle }) => <Item title={itemTitle} />)
                        }
                    </List>
                )}
<<<<<<< HEAD
            <Button onClick={changeTitle} title={"Add"} />
            <Button onClick={changeTitle} title={"delete"} />
=======
            {/* On utilise notre component générique Button pour effectuer l'action d'ajout et de supression d'une liste dans le tableau de list*/}
            <Button onClick={addList} title={'Add'} />
            <Button onClick={removeList} title={'delete'} />
>>>>>>> 7f9cf2a7268cd42ec1609f2b810e6fed6904dcb5
        </div>
    )
}


export default App;
