import { useState } from "react";
import Icon from "../icon";

interface IProps {
  className?: string;
  title?: string;
  subTitle?: string;
  data: {
    label: string;
    value: unknown;
  }[];
  onChange: (tags:ITag[]) => void
}

interface ITag {
  label: string;
  id: number;
  value: unknown;
  selected: boolean;
}

const TagPicker = ({ data,title, subTitle, className = "",onChange }: IProps) => {
  const [selecteds, setSelected] = useState<ITag[]>(() =>
    data.map((tag, index) => {
      return { ...tag, selected: false, id: index };
    })
  );


  const handleSelectTag = (tag: ITag) => {
    const newTags = [...selecteds];
    newTags[tag.id].selected = true;
    setSelected(newTags);
    onChange(newTags.filter(tag => tag.selected))
  };

  const handleUnselectTag = (tag: ITag) => {
    const newTags = [...selecteds];
    newTags[tag.id].selected = false;
    setSelected(newTags);
    onChange(newTags.filter(tag => tag.selected))
  };
  return (
    <div className={className}>
     {title && <p className={`text-[#344054] font-semibold `}>{title}</p>}  
     {subTitle && <label>{subTitle}</label>}
      
      <div className="mt-4">
        {/* Selected tags */}
        <div className="flex mb-4 flex-wrap">
          {selecteds
            .filter((tag) => tag.selected)
            .map((tag) => (
              <div key={tag.id} onClick={() => handleUnselectTag(tag)} className="bg-purple/20 mr-2 mt-2 rounded-full cursor-pointer flex items-center px-4 py-1">
                <p className=" text-sm text-purple mr-2  ">
                  {tag.label}
                </p>
                <Icon className="w-fit" size="xxs" name="tag-close" />
              </div>
            ))}
        </div>
        {/* Unpick tag */}
        <div className="flex  flex-wrap">
          {selecteds
            .filter((tag) => !tag.selected)
            .map((tag) => (
              <p
                key={tag.id}
                onClick={() => handleSelectTag(tag)}
                className="bg-gray/20 text-sm mt-2 text-black px-4 py-1 mr-2 rounded-full cursor-pointer"
              >
                {tag.label}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TagPicker;
