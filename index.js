const _ = {};

// 类型判断
_.typeOf = (o = '') => {
    const flag = o === null
        ? String(o)
        : ({}).toString.call(o).slice(8, -1).toLowerCase();
    return flag;
};

// 判断自定义链接的协议是否允许
_.protocolSafe = (list = [], url = '') => {
    const location = document.createElement('a');
    location.href = url || '';
    let protocol = location.protocol || '';
    protocol = protocol.substr(0, protocol.length - 1);
    return list.includes(protocol);
};
// 添加唯一标记后缀 | -{时间戳}+{一万内的随机数}
_.addUniqueSuffix = (str = '') =>
    `${str}-${+Date.now()}-${parseInt(Math.random() * 10000)}`;

// 是数字
_.isNumber = o => _.typeOf(o) === 'number';
// 是整数【含0】
_.isInteger = o => _.isNumber(o) && o % 1 === 0;
// 是整数【不含0】
_.isIntegerNotZero = o => _.isInteger(0) && o !== 0;

export default _;
