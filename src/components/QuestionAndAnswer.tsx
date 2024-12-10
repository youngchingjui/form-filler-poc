import React, { useState } from 'react';
import { FinancialForm } from '../utils/formSchema';

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
                <button onClick={() => removeItem(section, index)}>
                  Remove
                </button>
              </div>
            ))}
            <button onClick={() => addItem(section)}>
              Add {section.slice(0, -1)}
            </button>
          </div>
        )
      )}
    </div>
  );
};
