const { firestone } = this.PaymentResponse;

const ref = firestone.collection("/venta")
.where("sucursal", "==", "LOPEZMATEOS")
.orderBy("numeroOrden")
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach.(function(doc){
        console.log(doc.id, " => ", doc.data());
    });

}).catch(function(error) {
    console.log("Error getting document:", error);
})

