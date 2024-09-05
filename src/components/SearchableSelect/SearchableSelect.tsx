import React, { useState } from "react";
import {
  selectWrapper,
  viewer,
  optionsContainer,
  option,
  inputStyle,
  optionsWrapper,
} from "./SearchableSelect.css";
import useModal from "@/hooks/useModal";
import { AnimatePresence, motion } from "framer-motion";
import { expandFromTopVariants } from "@/constants";

interface SearchableSelectProps {
  options: readonly string[];
  selectedValue: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  selectedValue,
  placeholder,
  onChange,
}) => {
  const { isOpen, onToggle, onClose, ref } = useModal();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (value: string) => {
    onChange(value);
    onClose();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={selectWrapper} ref={ref}>
      <div className={viewer} onClick={onToggle}>
        {selectedValue || placeholder}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={optionsContainer}
            key="inedibleFood"
            variants={expandFromTopVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleSearchChange}
              className={inputStyle}
            />
            <div className={optionsWrapper}>
              {filteredOptions.map((optionValue) => (
                <div
                  key={optionValue}
                  className={option}
                  data-selected={optionValue === selectedValue}
                  onClick={() => handleSelect(optionValue)}
                >
                  {optionValue}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchableSelect;
