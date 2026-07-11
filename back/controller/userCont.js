const User = require('../modules/user');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // إرجاع البيانات التي تم إرسالها مباشرة للمستخدم
    res.status(200).json({ 
      message: "تم استقبال البيانات بنجاح", 
      receivedData: {
        email: email,
        password: password
      } 
    });
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ في الخادم", error });
  }
};

const getAll = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);    
    } catch(error) {
        res.status(500).json({ message: "حدث خطأ في الخادم", error });
    }
}
// دالة إنشاء مستخدم جديد
const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save(); // حفظ المستخدم في MongoDB
    res.status(201).json({ message: "تم إنشاء المستخدم بنجاح", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "خطأ أثناء إنشاء المستخدم", error });
  }
};

module.exports = { login , getAll , createUser };