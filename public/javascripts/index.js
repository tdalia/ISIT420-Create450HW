function Sale(pStoreID, pSalesPersonID, pCdID, pPricePaid) {
    this.storeID = pStoreID;
    this.salesPersonID = pSalesPersonID;
    this.cdID = pCdID;
    this.pricePaid = pPricePaid;
}

//POST 
document.addEventListener("DOMContentLoaded", function (event) {

    //load one sale

    document.getElementById("create").addEventListener("click", function () {

    })


    document.getElementById("submitOne").addEventListener("click", function () {
        var tStoreID = document.getElementById("storeID").nodeValue;
        var tSalesPersonID = document.getElementById("salesPersonId").nodeValue;
        var tCdID = document.getElementById("cdId").nodeValue;
        var tPricePaid = document.getElementById("pricePaid").nodeValue;
        var oneSale = new Sale(tStoreID, tSalesPersonID, tCdID, tPricePaid);

        $.ajax({
            url: '/NewSale', 
            method: 'POST', 
            dataType: 'json', 
            contentType: 'application/json',
            data: JSON.stringify(oneSale),
            success: function (result) {

            }
        })
    })

    document.getElementById("submit500").addEventListener("click", function () {

    })
})