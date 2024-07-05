import { Datagrid, List, TextInput, SimpleForm, Edit, required, ReferenceInput, NumberInput } from "react-admin";

export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>

        <TextInput source="title" validate={[required()]} label="Title" />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="Order" />

      </SimpleForm>
    </Edit>
  )
} 