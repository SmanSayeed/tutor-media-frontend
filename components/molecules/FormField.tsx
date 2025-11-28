import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Text from "@/components/atoms/Text/Text";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  name,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        <Text variant="others-text-base" as="span">{label}</Text>
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11"
      />
    </div>
  );
}

