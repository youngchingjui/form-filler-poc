import React from 'react';
import { FinancialForm } from '../utils/formSchema';
import { Button } from './button/Button';
import { Trash2 } from 'react-feather';

interface QuestionAndAnswerProps {
  formData: FinancialForm;
  onFormUpdate: (data: FinancialForm) => void;
}

export const QuestionAndAnswer: React.FC<QuestionAndAnswerProps> = ({
  formData,
  onFormUpdate,
}) => {
  const handleItemChange = (
    section: keyof FinancialForm,
    index: number,
    value: string
  ) => {
    const updatedSection = [...formData[section]];
    updatedSection[index] = value;
    onFormUpdate({ ...formData, [section]: updatedSection });
  };

  const addItem = (section: keyof FinancialForm) => {
    onFormUpdate({ ...formData, [section]: [...formData[section], ''] });
  };

  const removeItem = (section: keyof FinancialForm, index: number) => {
    const updatedSection = formData[section].filter((_, i) => i !== index);
    onFormUpdate({ ...formData, [section]: updatedSection });
  };

  return (
    <div data-component="QuestionAndAnswer">
      {(['assets', 'income', 'expenses'] as (keyof FinancialForm)[]).map(
        (section) => (
          <div key={section} className="section">
            <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
            {formData[section].map((item, index) => (
              <div key={index} className="list-item">
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleItemChange(
                      section,
                      index,
                      e.currentTarget.textContent || ''
                    )
                  }
                >
                  {item}
                </span>
                <Trash2
                  onClick={() => removeItem(section, index)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
            <Button
              label="Add"
              buttonStyle="action"
              onClick={() => addItem(section)}
            />
          </div>
        )
      )}
    </div>
  );
};
