import { Form, Input, InputNumber, Button } from "antd";
import { BLUE_VIOLET } from "../../constants/color";
import "antd/dist/antd.css";
import "./contact.css";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Send = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="center-form" id="contact-us">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <p className="paragraph1">Contactez-nous ici ...</p>

        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["user", "website"]} label="Website">
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "introduction", "Description?"]}
          label="Description"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          className="btn-form"
        >
          <Button type="primary" block htmlType="submit">
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
const style = {
  paragraph1: {
    color: BLUE_VIOLET,
    fontSize: 38,
  },
};
export default Send;
