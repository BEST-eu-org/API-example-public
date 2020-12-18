"""
This script is used to put associations from sequelize-auto in model definition files instead of init-models.js
It should be copied and run in the models directory
"""

import os
import re

FILES_TO_SKIP = ['init-models\.js', '.*\.py', '.*\.swp']
output_dir = "../models-modified/"

if not os.path.isdir(output_dir):
    os.mkdir(output_dir)


def skip_file(filename):
    for file_to_skip in FILES_TO_SKIP:
        if re.search(file_to_skip, filename):
            return True
    return False


def get_all_associations():
    with open('init-models.js') as init_models_file:
        line = init_models_file.readline()
        while 'var' in line or line == '\n' or 'function' in line:
            line = init_models_file.readline()

        associations = {}
        while line != '\n':
            table_name = line.split('.')[0].strip()
            line = re.sub(r"(?<=\()(.*?)(?=,)", "models.\\1", line).strip().strip("\n")
            if table_name not in associations:
                associations[table_name] = []
            associations[table_name].append(line)

            line = init_models_file.readline()
    return associations


def get_association_string(filename, associations):
    table_name = filename.strip(".js")
    end_string = ""
    if table_name in associations:
        end_string += "\t" + table_name + ".associate = models => {\n"
        for association in associations[table_name]:
            end_string += "\t\t" + association + "\n"
        end_string += "\t}};\nreturn {}\n".format(table_name)

    return end_string


def edit_file(filename, associations):
    with open(filename) as file:
        table_name = filename.strip(".js")
        file_text = file.read()
        file_text = file_text.replace("return", "const {} = ".format(table_name))

        association_string = get_association_string(filename, associations)
        if association_string != "":
            match = re.search(table_name, file_text)
            parenthesis_count = 0
            first_parenthesis_found = False
            for index, symbol in enumerate(file_text[match.end():], start=match.end()):
                if symbol == "(":
                    parenthesis_count += 1
                    first_parenthesis_found = True
                elif symbol == ")":
                    parenthesis_count -= 1

                if parenthesis_count == 0 and first_parenthesis_found:
                    end_index = index + 2
                    new_file_text = file_text[:end_index] + "\n" + association_string + "\n" + file_text[end_index:]
                    with open(output_dir + filename, "w") as output_file:
                        output_file.write(new_file_text)
                    break


def main():
    models = os.listdir()
    associations = get_all_associations()
    for model_file in models:
        if not skip_file(model_file):
            edit_file(model_file, associations)

main()