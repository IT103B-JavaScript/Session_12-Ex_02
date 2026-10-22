let subscriptions = [
    { subCode: "SUB_001", customerName: "Nguyen Van An", plan: "PERSONAL", deviceLimit: 1 },
    { subCode: "SUB_002", customerName: "Tran Thi Binh", plan: "FAMILY", deviceLimit: 5 },
    { subCode: "SUB_003", customerName: "Le Minh Cuong", plan: "PERSONAL", deviceLimit: 1 }
]

function menu() {
    console.log("")
    console.log("====MENU QUẢN TRỊ RIKKEISTREAM====")
    console.log("1. Thêm thuê bao mới")
    console.log("2. Xem danh sách thuê bao")
    console.log("3. Cập nhật gói cước")
    console.log("4. Hủy thuê bao")
    console.log("5. Thoát chương trình")
    console.log("==================================")
}

function addSubscription() {
    console.log("====THÊM THUÊ BAO MỚI====")
    let customerName = prompt("Nhập tên khách hàng: ")
    let plan = prompt("Chọn gói (PERSONAL / FAMILY): ")

    if (plan !== "PERSONAL" && plan !== "FAMILY") {
        console.log("Gói cước không hợp lệ!")
        return
    }

    let deviceLimit = 1
    if (plan === "FAMILY") {
        deviceLimit = 5
    }

    let subCode = "SUB_0" + nextNumber
    if (nextNumber < 10) {
        subCode = "SUB_00" + nextNumber
    }
    nextNumber = nextNumber + 1

    subscriptions.push({ subCode: subCode, customerName: customerName, plan: plan, deviceLimit: deviceLimit })
    console.log("Đã thêm thuê bao " + subCode + " thành công!")
}

function listSubscriptions() {
    console.log("====DANH SÁCH THUÊ BAO====")
    console.log("|| Mã || Tên khách hàng || Gói cước || Hạn mức thiết bị ||")
    console.log("======================================")
    for (let i = 0; i < subscriptions.length; i++) {
        console.log("|| " + subscriptions[i].subCode + " || " + subscriptions[i].customerName + " || " + subscriptions[i].plan + " || " + subscriptions[i].deviceLimit + " ||")
    }
    console.log("======================================")
}

function updateSubscription() {
    console.log("====CẬP NHẬT GÓI CƯỚC====")
    let updateCode = prompt("Nhập mã thuê bao cần cập nhật: ")
    let flags = false

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subCode === updateCode) {
            flags = true
            let newPlan = prompt("Nhập gói mới (PERSONAL / FAMILY): ")
            subscriptions[i].plan = newPlan
            if (newPlan === "FAMILY") {
                subscriptions[i].deviceLimit = 5
            } else {
                subscriptions[i].deviceLimit = 1
            }
            console.log("Đã cập nhật thuê bao " + updateCode + " sang gói " + newPlan + ". Hạn mức thiết bị: " + subscriptions[i].deviceLimit)
        }
    }

    if (flags === false) {
        console.log("Không tìm thấy thuê bao!")
    }
}

function deleteSubscription() {
    console.log("====HỦY THUÊ BAO====")
    let deleteCode = prompt("Nhập mã thuê bao cần hủy: ")
    let deleteIndex = -1

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subCode === deleteCode) {
            deleteIndex = i
        }
    }

    if (deleteIndex !== -1) {
        subscriptions.splice(deleteIndex, 1)
        console.log("Đã hủy thuê bao: " + deleteCode)
    } else {
        console.log("Không tìm thấy thuê bao cần hủy!")
    }
}

let menuChoice = 0
do {
    menu()
    menuChoice = prompt("Nhập lựa chọn (1-5): ")

    switch (menuChoice) {
        case "1":
            addSubscription()
            break
        case "2":
            listSubscriptions()
            break
        case "3":
            updateSubscription()
            break
        case "4":
            deleteSubscription()
            break
        case "5":
            console.log("Đã thoát chương trình RikkeiStream. Tạm biệt!")
            break
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập từ 1 đến 5!")
            break
    }
} while (menuChoice !== 5)