import * as Yup from 'yup';
import User from '../models/User';
import Mail from '../../lib/Mail';

class RecoveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Recuperação de senha',
      template: 'recovery',
      context: {
        name: user.name,
        password: user.password_hash,
      },
    });

    return res.json({ ok: true });
  }
}
export default new RecoveryController();
