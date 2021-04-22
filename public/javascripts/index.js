function Sales(pStoreID, pSalesPersonID, pCdID, pPricePaid) {
    this.storeID = pStoreID;
    this.salesPersonID = pSalesPersonID;
    this.cdID = pCdID;
    this.pricePaid = pPricePaid;
};

var storeIds = [98053, 98007, 98077, 98055, 98011, 98046];

//POST 
document.addEventListener("DOMContentLoaded", function (event) {

    //load one sale

    document.getElementById("create").addEventListener("click", function () {
        getSales();
    });

    document.getElementById("submitOne").addEventListener("click", function () {
        var salesObj = generateSalesObject();
        // console.log("Before Calling Post: ", salesObj);
        $.ajax({
            url: '/NewSale', 
            method: 'POST', 
            dataType: 'json', 
            contentType: 'application/json',
            data: JSON.stringify(salesObj),
            success: function (result) {
                // console.log("Success: ", result);
            }, 
            error: function(err) {
                // console.log("Failed to Save: ", err);
            }
        })
    });

    document.getElementById("submit500").addEventListener("click", function () {

    });

    getSales();
});

function getSales() {
    var salesObj = generateSalesObject();
   // populate fields 
   populateFields(salesObj);
   return;
};

function generateSalesObject() {
    // Generate Random salesPersonId
    var salesPersonId = getRndInteger(1, 24);
    // Get StoreId for salesPerson
    var storeIdIndex = getSoreIdForSalesPersonId(salesPersonId);
    // Get CdId
    var cdId = 123456;
    // Get pricePaid
    var price = getRndInteger(5, 15);

    var salesObj = new Sales(storeIds[storeIdIndex], salesPersonId, cdId, price);

    return salesObj;
};

function populateFields(salesObj) {
    if (salesObj) {
        document.getElementById("storeId").value = salesObj.storeID;
        document.getElementById("salesPersonId").value = salesObj.salesPersonID;
        document.getElementById("cdId").value = salesObj.cdID;
        document.getElementById("pricePaid").value = salesObj.pricePaid;
    } else {
        document.getElementById("storeId").value = '';
        document.getElementById("salesPersonId").value = '';
        document.getElementById("cdId").value = '';
        document.getElementById("pricePaid").value = '';
    }

    return;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getSoreIdForSalesPersonId(spersonId) {
    var index = -1;
    if (spersonId >= 1  && spersonId <= 4)
        index = 0;
    else if(spersonId >= 5  && spersonId <= 8)
        index = 1;
    else if(spersonId >= 9  && spersonId <= 12)
        index = 2;
    else if(spersonId >= 13  && spersonId <= 16)
        index = 3;
    else if(spersonId >= 17  && spersonId <= 20)
        index = 4;
    else if(spersonId >= 21  && spersonId <= 24)
        index = 5;
    
    return index;
}

