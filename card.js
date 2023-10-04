class Card{

    addDetails(data){
        const date = new Date()
        data.created_at = firebase.firestore.Timestamp.fromDate(date)
        db.collection('cards').add(data).then(() => { console.log("message sent") })
        .catch((err) => { console.log(err) })
    }
    getDetails(add){
        db.collection('cards').orderBy('created_at').get().then((snap)=>{
            snap.forEach(element => {
                add(element.data())
            });

        })
    }
}