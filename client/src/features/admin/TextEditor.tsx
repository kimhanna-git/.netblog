import { Typography } from "@mui/material";
import { ContentState, convertToRaw, EditorState, Modifier } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


    const TextEditor = ({ onChange, value } : any) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [updated, setUpdated] = useState(false);
  
    useEffect(() => {
      if (!updated) {
        const defaultValue = value ? value : "";
        const blocksFromHtml = htmlToDraft(defaultValue);
        const contentState = ContentState.createFromBlockArray(
          blocksFromHtml.contentBlocks,
          blocksFromHtml.entityMap
        );
        const newEditorState = EditorState.createWithContent(contentState);
        setEditorState(newEditorState);
      }
    }, [value]);
  
    const onEditorStateChange = (editorState : any) => {
      setUpdated(true);
      setEditorState(editorState);
      return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };
  
    const toolbar = {
      options: ["inline", "blockType", "list"],
      inline: {
        inDropdown: false,
        options: ['bold', 'underline']
      },
      blockType: {
        inDropdown: false,
        options: ["Normal", 'Blockquote', 'Code']
      },
      list: {
        inDropdown: false,
        options: ["unordered", "ordered"]
      },
    };
  
    return (
      <React.Fragment>
        <div className="editor" style={{maxHeight: "570px" , width:'100%' }}>
        <Typography sx={{fontSize: 20}}>
          <Editor  
            spellCheck
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbar={toolbar}
            editorStyle={{height: "500px" }}
          />
          </Typography>
        </div>
        
      </React.Fragment>
    );
  };
  
  export default TextEditor;