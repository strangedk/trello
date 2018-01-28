class GUID {
    static create() {
        let guid_part = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };

         return "{" +
                guid_part() +
                guid_part() + '-' +
                guid_part() + '-' +
                guid_part() + '-' +
                guid_part() + '-' +
                guid_part() +
                guid_part() +
                guid_part() + "}";
    }
}

export default GUID;